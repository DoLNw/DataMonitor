<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/index.css">
    <title>设备环境监测平台大数据</title>
    <script src="js/jquery-2.2.1.min.js"></script>
    <script src="js/rem.js"></script>
    <script src="js/echarts.min.js"></script>
    <script src="js/guangxi.js"></script>
    <script src="js/index.js"></script>
</head>
<body>
    <div class="t_container">
        <header class="t_header">
            <span>设备环境监测平台213123</span>
        </header>
        <main class="t_main">
            <div class="t_left_box">
            <img class="t_l_line" src="img/left_line.png" alt="">
            <div class="t_mbox t_rbox">
                <i></i>
                <span>本月订单数</span>
                <h2>18000</h2>
            </div>
            <div class="t_mbox t_gbox">
                <i></i>
                <span>本月新增会员</span>
                <h2>1000</h2>
            </div>
            <div class="t_mbox t_ybox">
                <i></i>
                <span>一次消费会员</span>
                <h2>${size}</h2>
            </div>
            <img class="t_r_line" src="img/right_line.png" alt="">
        </div>
            <div class="t_center_box">
                <div class="t_top_box">
                    <img class="t_l_line" src="img/left_line.png" alt="">
                    <ul class="t_nav">
                        <li>
                            <span>总设备数</span>
                            <h1>5</h1>
                            <i></i>
                        </li>
                        <li>
                            <span>在线设备数目</span>
                            <h1>3</h1>
                            <i></i>
                        </li>
                        <li>
                            <span>正在训练设备数目</span>
                            <h1>3</h1>
                        </li>
                    </ul>
                    <img class="t_r_line" src="img/right_line.png" alt="">
                </div>
                <div class="t_bottom_box">
                    <img class="t_l_line" src="img/left_line.png" alt="">
                    <div id="chart_3" class="echart" style="width: 100%; height: 3.6rem;"></div>
                    <img class="t_r_line" src="img/right_line.png" alt="">
                </div>
            </div>
            <div class="t_right_box">
                    <img class="t_l_line" src="img/left_line.png" alt="">
                    <div id="chart_4" class="echart" style="width: 50%; height: 4.6rem; position: absolute;"></div>
                    <header class="t_b_h">
                        <span>开关次数</span>
                        <img src="img/end.png"></img>
                        <h3>15<span>次</span></h3>
                    </header>
                    <main class="t_b_m">
                        <img src="img/map.png" alt="">
                        <div class="t_b_box">
                            <span>溫度</span>
                            <i></i>
                            <h2>23℃</h2>
                        </div>
                        <div class="t_b_box1">
                            <span>湿度</span>
                            <i></i>
                            <h2>56RH</h2>
                        </div>
                        <div class="t_b_box2">
                            <span>信号</span>
                            <i></i>
                            <h2>-90dBm</h2>
                        </div>
                        <div class="t_b_box3">
                            <span>光线</span>
                            <i></i>
                            <h2>250LX</h2>
                        </div>
                    </main>
                    <img class="t_r_line" src="img/right_line.png" alt="">
            </div>
            <div class="b_left_box">
                    <img class="t_l_line" src="img/left_line.png" alt="">
                    <div id="chart_2" class="echart" style="width: 100%; height: 3.6rem;"></div>
                    <img class="t_r_line" src="img/right_line.png" alt="">
            </div>
            <div class="b_center_box">
                    <img class="t_l_line" src="img/left_line.png" alt="">
                    <div id="chart_1" class="echart" style="width: 100%; height: 3.6rem;"></div>
                    <img class="t_r_line" src="img/right_line.png" alt="">
            </div>
<!--            <div class="b_right_box">-->
<!--                    <img class="t_l_line" src="img/left_line.png" alt="">-->
<!--                    <h1 class="t_title">设备维保数据查看</h1>-->
<!--                    <table class="t_table">-->
<!--                        <thead>-->
<!--                            <tr>-->
<!--                                <th>维护时间</th>-->
<!--                                <th>维保人</th>-->
<!--                                <th>维保电话</th>-->
<!--                                <th>更换水量</th>  -->
<!--                            </tr>-->
<!--                        </thead>-->
<!--                        <tbody>-->
<!--                            <tr>-->
<!--                                <td>2018-02-06</td>-->
<!--                                <td>张伟</td>-->
<!--                                <td>13111345462</td>-->
<!--                                <td>1000ml</td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td>2018-02-06</td>-->
<!--                                <td>张伟</td>-->
<!--                                <td>13111345462</td>-->
<!--                                <td>1000ml</td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td>2018-02-06</td>-->
<!--                                <td>张伟</td>-->
<!--                                <td>13111345462</td>-->
<!--                                <td>1000ml</td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td>2018-02-06</td>-->
<!--                                <td>张伟</td>-->
<!--                                <td>13111345462</td>-->
<!--                                <td>1000ml</td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td>2018-02-06</td>-->
<!--                                <td>张伟</td>-->
<!--                                <td>13111345462</td>-->
<!--                                <td>1000ml</td>-->
<!--                            </tr>-->
<!--                        </tbody>-->
<!--                    </table>-->
<!--                    <img class="t_r_line" src="img/right_line.png" alt="">-->
<!--            </div>-->
        </main>
    </div>
</body>
</html>