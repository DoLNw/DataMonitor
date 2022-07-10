package com.jcwang.controller;

import com.alibaba.fastjson.JSON;
import com.jcwang.domain.HostState;
import com.jcwang.mapper.HostStateMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;

@Controller
public class MonitorController {

    @Autowired
    private HostStateMapper hostStateMapper;

    @RequestMapping(value = "/monitor2")
    public String show() {
//        System.out.println(hostStateMapper.findAll());

        return "index";                      //返回到index页面
    }

    @RequestMapping(value = "/monitor")
    public ModelAndView show(ModelAndView mv) {
        List<HostState> hostStates = hostStateMapper.findAll();
        int size = hostStates.size();
        // jsp中取值形式: requestScope.size
        mv.addObject("size", size);
//        // jsp中取值形式: requestScope.map.i.uuid
//        // mv.addObject("map", map);
//
//        Map<String, HostState> map = new HashMap<>();
//        for (int i=0; i<size; i++) {
//            map.put(""+i, hostStates.get(i));
//        }
//        // jsp中取值形式: requestScope.i.uuid
//        mv.addAllObjects(map);


        mv.addObject("hostStates", hostStates);

//        mv.setViewName("redirect:/monitor2");
        mv.setViewName("index");
        return mv;                      //返回到index页面
    }

    @RequestMapping(value = "/monitor3")
    public ModelAndView show1(ModelAndView mv) {
        List<HostState> hostStates = hostStateMapper.findAll();
        int size = hostStates.size();
        // jsp中取值形式: requestScope.size
        mv.addObject("size", size);
//        // jsp中取值形式: requestScope.map.i.uuid
//        // mv.addObject("map", map);
//
//        Map<String, HostState> map = new HashMap<>();
//        for (int i=0; i<size; i++) {
//            map.put(""+i, hostStates.get(i));
//        }
//        // jsp中取值形式: requestScope.i.uuid
//        mv.addAllObjects(map);


        mv.addObject("hostStates", hostStates);

//        mv.setViewName("redirect:/monitor2");
        mv.setViewName("index3");
        return mv;                      //返回到index页面
    }

    @RequestMapping(value = "/data")
    @ResponseBody                            //传输Json数据所需注解
    public List<HostState> user() {
        String listJson = JSON.toJSONString(hostStateMapper.findAll());
//        System.out.println(listJson);
        return hostStateMapper.findAll();    //直接将json传递到页面上
    }


//    // 加下面这个为了返回jsp文件
//    // 不用加，可以直接在配置文件中写
//    @Bean
//    public InternalResourceViewResolver viewResolver() {
//        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
////        viewResolver.setPrefix("/src/main/webapp/WEB-INF/jsp/");
//        viewResolver.setPrefix("/WEB-INF/jsp/");
//        viewResolver.setSuffix(".jsp");
//        return viewResolver;
//    }
}