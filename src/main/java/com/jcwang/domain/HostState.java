package com.jcwang.domain;

public class HostState {
    private String uuid;
    private double disk_allocation_ratio;
    private String name;
    private String ip;
    private double total_disk_gb;
    private double total_memory_gb;
    private double gpu_total_memory_gb;
    private double cpu_max_freq;
    private String time;
    private double cpu_percent;
    private double used_disk_gb;
    private double used_memory_gb;
    private double gpu_used_memory_gb;
    private double cpu_current_freq;
    private int high_vul;
    private int medium_vul;
    private int low_vul;
    private int info_vul;
    private double model_size_mb;
    private double loss;
    private double accuracy;
    private int epoch;
    private boolean is_aggregating;
    private boolean is_training;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public double getDisk_allocation_ratio() {
        return disk_allocation_ratio;
    }

    public void setDisk_allocation_ratio(double disk_allocation_ratio) {
        this.disk_allocation_ratio = disk_allocation_ratio;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public double getTotal_disk_gb() {
        return total_disk_gb;
    }

    public void setTotal_disk_gb(double total_disk_gb) {
        this.total_disk_gb = total_disk_gb;
    }

    public double getTotal_memory_gb() {
        return total_memory_gb;
    }

    public void setTotal_memory_gb(double total_memory_gb) {
        this.total_memory_gb = total_memory_gb;
    }

    public double getGpu_total_memory_gb() {
        return gpu_total_memory_gb;
    }

    public void setGpu_total_memory_gb(double gpu_total_memory_gb) {
        this.gpu_total_memory_gb = gpu_total_memory_gb;
    }

    public double getCpu_max_freq() {
        return cpu_max_freq;
    }

    public void setCpu_max_freq(double cpu_max_freq) {
        this.cpu_max_freq = cpu_max_freq;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getCpu_percent() {
        return cpu_percent;
    }

    public void setCpu_percent(double cpu_percent) {
        this.cpu_percent = cpu_percent;
    }

    public double getUsed_disk_gb() {
        return used_disk_gb;
    }

    public void setUsed_disk_gb(double used_disk_gb) {
        this.used_disk_gb = used_disk_gb;
    }

    public double getUsed_memory_gb() {
        return used_memory_gb;
    }

    public void setUsed_memory_gb(double used_memory_gb) {
        this.used_memory_gb = used_memory_gb;
    }

    public double getGpu_used_memory_gb() {
        return gpu_used_memory_gb;
    }

    public void setGpu_used_memory_gb(double gpu_used_memory_gb) {
        this.gpu_used_memory_gb = gpu_used_memory_gb;
    }

    public double getCpu_current_freq() {
        return cpu_current_freq;
    }

    public void setCpu_current_freq(double cpu_current_freq) {
        this.cpu_current_freq = cpu_current_freq;
    }

    public int getHigh_vul() {
        return high_vul;
    }

    public void setHigh_vul(int high_vul) {
        this.high_vul = high_vul;
    }

    public int getMedium_vul() {
        return medium_vul;
    }

    public void setMedium_vul(int medium_vul) {
        this.medium_vul = medium_vul;
    }

    public int getLow_vul() {
        return low_vul;
    }

    public void setLow_vul(int low_vul) {
        this.low_vul = low_vul;
    }

    public int getInfo_vul() {
        return info_vul;
    }

    public void setInfo_vul(int info_vul) {
        this.info_vul = info_vul;
    }

    public double getModel_size_mb() {
        return model_size_mb;
    }

    public void setModel_size_mb(double model_size_mb) {
        this.model_size_mb = model_size_mb;
    }

    public double getLoss() {
        return loss;
    }

    public void setLoss(double loss) {
        this.loss = loss;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(double accuracy) {
        this.accuracy = accuracy;
    }

    public int getEpoch() {
        return epoch;
    }

    public void setEpoch(int epoch) {
        this.epoch = epoch;
    }

    public boolean isIs_aggregating() {
        return is_aggregating;
    }

    public void setIs_aggregating(boolean is_aggregating) {
        this.is_aggregating = is_aggregating;
    }

    public boolean isIs_training() {
        return is_training;
    }

    public void setIs_training(boolean is_training) {
        this.is_training = is_training;
    }

    @Override
    public String toString() {
        return "HostState{" +
                "uuid='" + uuid + '\'' +
                ", disk_allocation_ratio=" + disk_allocation_ratio +
                ", name='" + name + '\'' +
                ", ip='" + ip + '\'' +
                ", total_disk_gb=" + total_disk_gb +
                ", total_memory_gb=" + total_memory_gb +
                ", gpu_total_memory_gb=" + gpu_total_memory_gb +
                ", cpu_max_freq=" + cpu_max_freq +
                ", time='" + time + '\'' +
                ", cpu_percent=" + cpu_percent +
                ", used_disk_gb=" + used_disk_gb +
                ", used_memory_gb=" + used_memory_gb +
                ", gpu_used_memory_gb=" + gpu_used_memory_gb +
                ", cpu_current_freq=" + cpu_current_freq +
                ", high_vul=" + high_vul +
                ", medium_vul=" + medium_vul +
                ", low_vul=" + low_vul +
                ", info_vul=" + info_vul +
                ", model_size_mb=" + model_size_mb +
                ", loss=" + loss +
                ", accuracy=" + accuracy +
                ", epoch=" + epoch +
                ", is_aggregating=" + is_aggregating +
                ", is_training=" + is_training +
                "}\n";
    }
}
