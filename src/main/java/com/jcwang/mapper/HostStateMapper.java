package com.jcwang.mapper;

import com.jcwang.domain.HostState;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface HostStateMapper {

    @Select("select * from test")
    public List<HostState> findAll();
}
