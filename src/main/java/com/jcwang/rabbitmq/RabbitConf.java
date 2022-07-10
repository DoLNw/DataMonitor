package com.jcwang.rabbitmq;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConf {
    /**
     * 创建一个发送字符串的普通消息
     * 参数1 name ：队列名
     * 参数2 durable ：是否持久化
     * 参数3 exclusive ：仅创建者可以使用的私有队列，断开后自动删除
     * 参数4 autoDelete : 当所有消费客户端连接断开后，是否自动删除队列
     * @return
     */

    // 注意，其实python中fanout不指定queue也能收到消息
    // 1. 创建普通的消息队列2（用户绑定到交换机Fanout上）
    @Bean
    public Queue slQueueToFanout(){
        return new Queue(RabbitConstant.ML_QUEUE_TO_FANOUT,false,false,false);
    }

    // 2. 交换机（fanout）
    @Bean
    public FanoutExchange slFanoutExchange() {
        return new FanoutExchange(RabbitConstant.ML_FANOUT_EXCHANGE,false,false);
    }

    // 3. 将fanout队列绑定到此交换机上，注意，不需要路由key
    @Bean
    public Binding bindToFanout1() {
        //链式写法: 用指定的路由键将队列绑定到交换机
        return BindingBuilder.bind(slQueueToFanout()).to(slFanoutExchange());
    }
}
