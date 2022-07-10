package com.jcwang.controller;

import com.alibaba.fastjson.JSONObject;
import com.jcwang.domain.HostState;
import com.jcwang.mapper.HostStateMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class GetHostStatesController {

    @Autowired
    private HostStateMapper hostStateMapper;

    @ResponseBody
    @RequestMapping(value = "/getJSON", method = RequestMethod.GET)
    public String getJSON() {
        List<HostState> hostStates = hostStateMapper.findAll();

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("hostStates", hostStates);


        return jsonObject.toJSONString();
    }
}
