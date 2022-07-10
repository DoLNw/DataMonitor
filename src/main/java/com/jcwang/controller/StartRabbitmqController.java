package com.jcwang.controller;

import com.jcwang.rabbitmq.RabbitConstant;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartRabbitmqController {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping("sendFanoutsafsavarrefhuaerifheairuhfoera")
    public String show() {
        // fanout的话，key不用写，但是我在python中直接queue也不用写的
        rabbitTemplate.convertAndSend(RabbitConstant.ML_FANOUT_EXCHANGE, "", "start train");

        return "All online hosts start to train!!!";
    }
}