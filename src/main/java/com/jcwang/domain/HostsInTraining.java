package com.jcwang.domain;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class HostsInTraining {
    public Set<String> trainingHosts = new HashSet<>();
    public Set<String> readyHosts = new HashSet<>();
    public Map<Integer, Integer> epochIndex = new HashMap<>();
}
