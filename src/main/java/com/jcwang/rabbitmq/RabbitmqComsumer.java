package com.jcwang.rabbitmq;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jcwang.domain.HostsInTraining;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


@Component
public class RabbitmqComsumer {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    private HostsInTraining hostsInTraining = new HostsInTraining();

    // 接收订阅消息的队列
    @RabbitListener(queues = RabbitConstant.ML_QUEUE_TO_FANOUT)
    public void receive(String content) {

//        String json = JSON.toJSONString(content);
        try {
            JSONObject jsonObj = JSONObject.parseObject(content);
            int epoch = jsonObj.getIntValue("epoch");
            String uuid = jsonObj.getString("uuid");
            boolean isStart = jsonObj.getBooleanValue("start");
            boolean finished = jsonObj.getBooleanValue("finished");
            boolean scheduler = jsonObj.getBooleanValue("scheduler");

//            System.out.println(hostsInTraining.epoch);
//            System.out.println(hostsInTraining.uuid);
//            System.out.println(hostsInTraining.isStart);
//            System.out.println(hostsInTraining.finished);
//            System.out.println(hostsInTraining.scheduler);

            // 由于是set，所以此处没必要!trainingHosts.contains(uuid)
            // 将训练主机的uuis的放入训练集合
            if (isStart) {
                hostsInTraining.trainingHosts.add(uuid);
            }
            if (finished) {
                hostsInTraining.trainingHosts.clear();
                hostsInTraining.readyHosts.clear();
            }
            if (scheduler) {
                hostsInTraining.readyHosts.add(uuid);
                if (hostsInTraining.readyHosts.size() == hostsInTraining.trainingHosts.size()) { // 若所有都已经等待调度
                    rabbitTemplate.convertAndSend(RabbitConstant.ML_FANOUT_EXCHANGE, "", "start scheduler");
                    hostsInTraining.readyHosts.clear();
                }
            }
            if (epoch != -1) {
                hostsInTraining.epochIndex.put(epoch, hostsInTraining.epochIndex.getOrDefault(epoch, 0) + 1);
                if (hostsInTraining.epochIndex.get(epoch) == hostsInTraining.trainingHosts.size()) {
                    rabbitTemplate.convertAndSend(RabbitConstant.ML_FANOUT_EXCHANGE, "", "next epoch");
                    hostsInTraining.epochIndex.put(epoch, 0);
                }
            }

        } catch (Exception e) {
            System.out.println("接收到不是json的消息: " + content);
        }
    }

}
