function echart_pie(chartID) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(chartID).getElementsByClassName("echart_pie")[0]);
    option = {
        title: {
            text: '风险等级',
            // left: 20,
            textStyle: {
                fontSize: 15,
                color: '#fff'
            }
        },
        tooltip: {
            position:function(p, params, dom, rect, size){
                return dom.style.transform = 'translateZ(0)';
            },
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",

        },
        legend: {
            top: 25,
            left: -2,
            data: ['高', '中', '低', '安全'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '设备状态',
            type: 'pie',
            radius: ['35%', '50%'],    // 图的大小，内径，外经
            center: ['43%', '63%'],    // 图的位置，距离左跟上的位置
            color: ['#e72325', '#FF7F00', '#98e002', '#2ca3fd'],
            label: {
                // normal: {
                //     formatter: '{b}\n{d}%'
                // },
                show: false,
                position: 'center'
            },
            data: [{
                value: 2,
                name: '高',
                selected: true
            },
                {
                    value: 3,
                    name: '中',
                },{
                    value: 6,
                    name: '低'
                },
                {
                    value: 50,
                    name: '安全'
                }
            ]
        }]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function echart_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_2'));
    var data = {
        id: 'multipleBarsLines',
        title: '2018年前半年检测统计',
        legendBar: ['正面占比', '中立占比', '负面占比'],
        symbol: '', //数值是否带百分号        --默认为空 ''
        legendLine: ['同期对比'],
        xAxis: ['一月', '二月', '三月', '四月', '五月', '六月'],
        yAxis: [
            [8, 10, 10, 11, 4, 13]
        ],
        lines: [
            [10, 10, 9, 11, 7, 4]
        ],
        barColor: ['#3FA7DC', '#7091C4', '#5170A2'], //柱子颜色 必填参数
        lineColor: ['#D9523F'], // 折线颜色

    };
    /////////////end/////////

    var myData = (function test() {
        var yAxis = data.yAxis || [];
        var lines = data.lines || [];
        var legendBar = data.legendBar || [];
        var legendLine = data.legendLine || [];
        var symbol = data.symbol || ' ';
        var seriesArr = [];
        var legendArr = [];
        yAxis && yAxis.forEach((item, index) => {
            legendArr.push({
                name: legendBar && legendBar.length > 0 && legendBar[index]
            });
            seriesArr.push({
                name: legendBar && legendBar.length > 0 && legendBar[index],
                type: 'bar',
                barGap: '0.5px',
                data: item,
                barWidth: data.barWidth || 12,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}' + symbol,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            textAlign: 'left',
                            fontSize: 11,
                        },
                    },
                },
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: 4,
                        color: data.barColor[index]
                    },
                }
            });
        });

        lines && lines.forEach((item, index) => {
            legendArr.push({
                name: legendLine && legendLine.length > 0 && legendLine[index]
            })
            seriesArr.push({
                name: legendLine && legendLine.length > 0 && legendLine[index],
                type: 'line',
                data: item,
                itemStyle: {
                    normal: {
                        color: data.lineColor[index],
                        lineStyle: {
                            width: 3,
                            type: 'solid',
                        }
                    }
                },
                label: {
                    normal: {
                        show: false, //折线上方label控制显示隐藏
                        position: 'top',
                    }
                },
                symbol: 'circle',
                symbolSize: 10
            });
        });

        return {
            seriesArr,
            legendArr
        };
    })();


    option = {
        title: {
            show: true,
            top: '10%',
            left: '3%',
            text: data.title,
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            subtext: data.subTitle,
            link: ''
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                var time = '';
                var str = '';
                for (var i of params) {
                    time = i.name.replace(/\n/g, '') + '<br/>';
                    if (i.data == 'null' || i.data == null) {
                        str += i.seriesName + '：无数据' + '<br/>'
                    } else {
                        str += i.seriesName + '：' + i.data + symbol + '%<br/>'
                    }

                }
                return time + str;
            },
            axisPointer: {
                type: 'none'
            },
        },
        legend: {
            right: data.legendRight || '30%',
            top: '12%',
            right: '5%',
            itemGap: 16,
            itemWidth: 10,
            itemHeight: 10,
            data: myData.legendArr,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: 30,
            y: 80,
            x2: 30,
            y2: 60,
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            axisTick: {
                show: false,
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1AA1FD',
                },
                symbol: ['none', 'arrow']
            },
            axisLabel: {
                show: true,
                interval: '0',
                textStyle: {
                    lineHeight: 16,
                    padding: [2, 2, 0, 2],
                    height: 50,
                    fontSize: 12,
                },
                rich: {
                    Sunny: {
                        height: 50,
                        // width: 60,
                        padding: [0, 5, 0, 5],
                        align: 'center',
                    },
                },
                formatter: function (params, index) {
                    var newParamsName = "";
                    var splitNumber = 5;
                    var paramsNameNumber = params && params.length;
                    if (paramsNameNumber && paramsNameNumber <= 4) {
                        splitNumber = 4;
                    } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
                        splitNumber = 4;
                    } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
                        splitNumber = 5;
                    } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
                        splitNumber = 5;
                    } else {
                        params = params && params.slice(0, 15);
                    }

                    var provideNumber = splitNumber; //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    params = newParamsName;
                    return '{Sunny|' + params + '}';
                },
                color: '#1AA1FD',
            },

        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1AA1FD',
                },
                symbol: ['none', 'arrow']
            },
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1AA1FD',
                    type: 'solid'
                },
            }
        },
        series: myData.seriesArr
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function echart_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_3'));

    function showProvince() {
        var geoCoordMap = {
            '河池': [108.085179,24.700488],
            '柳州': [109.412578,24.354875],
            '梧州': [111.323462,23.478238],
            '南宁': [108.359656,22.81328],
            '北海': [109.171374,21.477419],
            '崇左': [107.347374,22.377503]
        };
        var data = [{
            name: '河池',
            value: 100
        },
            {
                name: '柳州',
                value: 100
            },
            {
                name: '梧州',
                value: 100
            },
            {
                name: '北海',
                value: 100
            },
            {
                name: '崇左',
                value: 100
            }
        ];
        var max = 480,
            min = 9; // todo
        var maxSize4Pin = 100,
            minSize4Pin = 20;
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        myChart.setOption(option = {
            title: {
                text: '设备分布',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#FFF'
                },
                left: '6%',
                top: '10%'
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {}
            },
            geo: {
                show: true,
                map: 'guangxi',
                mapType: 'guangxi',
                label: {
                    normal: {},
                    //鼠标移入后查看效果
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: true,
                itemStyle: {
                    normal: {
                        //          	color: '#ddd',
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(	47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: 'light',
                type: 'map',
                coordinateSystem: 'geo',
                data: convertData(data),
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: function (val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        normal: {
                            // show: true,
                            // textStyle: {
                            //     color: '#fff',
                            //     fontSize: 9,
                            // }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'light',
                    type: 'map',
                    mapType: 'hunan',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: ' ',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        });
    }
    showProvince();

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function echart_bar(chartID) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(chartID).getElementsByClassName("echart_bar")[0]);
    var data = [70, 34, 60];
    var titlename = ['磁盘(GB)', '内存(GB)', '显存(GB)'];
    var valdata = [702, 406, 664];
    var myColor = ['#1089E7', '#F57474', '#56D0E3'];
    option = {
        title: {
            text: '',
            x: 'center',
            textStyle: {
                color: '#FFF'
            },
            left: '6%',
            top: '0%'
        },
        //图标位置
        grid: {
            // top: '20%',
            // left: '32%'
            left: '33%',
            top: 0,
            right: '13%',
            bottom: 0,
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                //     formatter: (value, index) => {
                //         return [
                //
                //             `{lg|${index+1}}  ` + '{title|' + value + '} '
                //         ].join('\n')
                //     },
                //     rich: {
                //         lg: {
                //             backgroundColor: '#339911',
                //             color: '#fff',
                //             borderRadius: 15,
                //             // padding: 5,
                //             align: 'center',
                //             width: 15,
                //             height: 15
                //         },
                //     }
            },


        }, {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '       {c}%'
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 2,
                    barBorderRadius: 10,
                }
            }
        }, ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // window.addEventListener("resize", function () {
    //     myChart.resize();
    // });
}
/*
JQuery 的代码我们通常会包裹在一个$(function(){})函数中，jq 的$(function(){})也就是$(document).ready(function(){})的简写，与之对应的原生 js 的window.onload事件
1. $(function(){})不会被覆盖，而window.onload会被覆盖，个人感觉$(function(){})不会被覆盖的原因是将其放入到了一个队列中，在对应时机一次出队。
2. $(function(){})在window.onload执行前执行的，$(function(){})类似于原生 js 中的DOMContentLoaded事件，在 DOM 加载完毕后，页面全部内容（如图片等）完全加载完毕前被执行。而window.onload会在页面资源全部加载完毕后才会执行。

DOM 文档加载步骤：
解析 HTML 结构
加载外部的脚本和样式文件
解析并执行脚本代码
执行 $(function(){}) 内对应代码
加载图片等二进制资源
页面加载完毕，执行 window.onload
*/
// $(function () {
//     echart_pie();
//     echart_2();
//     echart_3();
//     echart_bar();
// });

// <!--window.onload是在设置页面加载完成执行的函数-->
// <script type="text/javascript">
// window.onload = function(){
//     var oDiv = document.getElementById('div1');
// }
// </script>


var myHostStates = new Array();
function async_data_chart_4() {
    // 异步加载数据
    $.ajax({
        url: 'getJSON',
        type: 'get',
        dataType: 'json',
        data:JSON.stringify('jsonObject'),
        success:function(data){
            // 得到hostStates的个数
            let hostStates = data.hostStates;
            let size = hostStates.length;
            document.getElementById("all_num").textContent = size;

            var onlineNum = 0;
            var isTrainingNum = 0;

            let previousHostsNum = myHostStates.length;
            if (size > previousHostsNum) {
                // console.log(hostStates);
                // console.log(myHostStates);
                var addingHosts = [];
                for (var i=0; i<size-previousHostsNum; i++) {
                    addingHosts.push(hostStates[previousHostsNum+i]);
                }
                changeNumber(addingHosts, previousHostsNum);
            } else if (size < previousHostsNum) {
                changeNumber(hostStates, 0);
            }

            myHostStates = hostStates;
            // myHostStates = [].concat(hostStates);

            for (var i=0; i<size; i++) {
                let hostState = hostStates[i];
                let host = document.getElementById("host" + (i+1));

                let myChart4 = echarts.init(host.getElementsByClassName("echart_bar")[0]);
                myChart4.setOption({
                    series: [{
                        data: [Math.round(hostState.used_disk_gb / hostState.total_disk_gb * 100, 1), Math.round(hostState.used_memory_gb / hostState.total_memory_gb * 100, 1), Math.round(hostState.gpu_used_memory_gb / hostState.gpu_total_memory_gb * 100, 1)]
                    }],
                    yAxis: [{}, {
                        data: [Math.round(hostState.total_disk_gb), Math.round(hostState.total_memory_gb), Math.round(hostState.gpu_total_memory_gb)],
                    }]
                });

                // id是唯一的，className取出来会是一个数组
                let obj = host.getElementsByClassName("host_info")[0];
                obj.getElementsByTagName("h3")[0].textContent = "主机" + (i+1);
                obj.getElementsByTagName("h4")[0].textContent = hostState.ip;
                // obj.getElementsByTagName("h5")[0].textContent = "CPU使用率" + Math.round(hostState.cpu_percent, 2) + "%";
                obj.getElementsByTagName("h5")[0].textContent = "CPU使用率" + hostState.cpu_percent + "%";
                let myChart1 = echarts.init(host.getElementsByClassName("echart_pie")[0]);
                myChart1.setOption({
                    series: [{
                        data: [{
                            value: hostState.high_vul+1,
                            name: '高',
                            selected: true
                        },
                            {
                                value: hostState.medium_vul+2,
                                name: '中',
                            },{
                                value: hostState.low_vul+3,
                                name: '低'
                            },
                            {
                                value: hostState.info_vul+20,
                                name: '安全'
                            }
                        ]
                    }],
                });

                host.getElementsByClassName("top_info")[0].getElementsByTagName("h5")[0].textContent = hostState.time;
                host.getElementsByClassName("bottom_info")[0].getElementsByTagName("h5")[0].textContent = hostState.uuid;
                host.getElementsByClassName("t_b_h")[0].getElementsByTagName("h3")[0].textContent = hostState.epoch;

                host.getElementsByClassName("t_b_box")[0].getElementsByTagName("h2")[0].textContent = hostState.epoch;
                host.getElementsByClassName("t_b_box1")[0].getElementsByTagName("h2")[0].textContent = hostState.loss;
                host.getElementsByClassName("t_b_box2")[0].getElementsByTagName("h2")[0].textContent = hostState.accuracy;
                host.getElementsByClassName("t_b_box3")[0].getElementsByTagName("h2")[0].textContent = hostState.model_size_mb;

                // 改成月日年 时分秒才能解析出总的毫秒数，而且safari中需要用/，不能用-
                let times =  hostState.time.substring(0, 10).split('-');
                let time = times[1] + '/' + times[2] + '/' + times[0] + ' ' + hostState.time.substring(10, 19);
                let timeMileSec = Date.parse(time);
                let currentTimeMileSec = new Date().getTime();
                // alert(currentTimeMileSec - timeMileSec);
                if (currentTimeMileSec - timeMileSec >= 0 && currentTimeMileSec - timeMileSec <= 5000) {
                    onlineNum += 1;
                    host.getElementsByClassName("online_status")[0].src = "img/online.png";
                } else {
                    host.getElementsByClassName("online_status")[0].src = "img/offline.png";
                }

                if (hostState.is_aggregating) {
                    isTrainingNum += 1;
                    host.getElementsByClassName("t_l_line")[0].src = "img/left_line_aggre.png";
                    host.getElementsByClassName("t_r_line")[0].src = "img/right_line_aggre.png";
                    host.getElementsByClassName("b_l_line")[0].src = "img/bl_line_aggre.png";
                } else if (hostState.is_training) {
                    isTrainingNum += 1;
                    host.getElementsByClassName("t_l_line")[0].src = "img/left_line_train.png";
                    host.getElementsByClassName("t_r_line")[0].src = "img/right_line_train.png";
                    host.getElementsByClassName("b_l_line")[0].src = "img/bl_line_train.png";
                } else {
                    host.getElementsByClassName("t_l_line")[0].src = "img/left_line.png";
                    host.getElementsByClassName("t_r_line")[0].src = "img/right_line.png";
                    host.getElementsByClassName("b_l_line")[0].src = "img/bl_line.png";
                }
            }


            document.getElementById("online_num").textContent = onlineNum;
            document.getElementById("training_num").textContent = isTrainingNum;
        },
        error:function(e){
            // alert("error loading");
            // alert(e);
            console.log(e);
        }
    });
}



function changeNumber(hostStates, previousHostsNum) {
    html = ""
    for (var i=0; i<hostStates.length; i++)
    {
        let hostState = hostStates[i];
        console.log(hostState)
        console.log(hostState.loss)
        html +=`
        <div class="t_right_box" id="host${previousHostsNum+i+1}">
            <img class="t_l_line" src="img/left_line.png" alt="">
            <img class="b_l_line" src="img/bl_line.png" alt="">
            <img class="t_r_line" src="img/right_line.png" alt="">
            
            <div class="top_info">
                <img class="online_status" src="img/offline.png" alt="">
                <h5>${hostState.time}</h5>
            </div>
            <div class="bottom_info">
                <h5>${hostState.uuid}</h5>
            </div>
            <div class="host_info">
                <h3>主机${i+1}</h3>
                <h4>${hostState.ip}</h4>
                <h5>CPU使用率</h5>
            </div>
            <div class="echart_bar" style="width: 50%; height: 40%; position: absolute; bottom: 6%"></div>
            <header class="t_b_h">
                <p>第</p><h3>${hostState.epoch}</h3><span>轮</span>
                <div class="echart_pie" style="width: 100%; height: 40%; position: absolute; top: 17%;"></div>
            </header>
            <main class="t_b_m">
                <div class="t_b_box">
                    <span>轮数</span>
<!--                        <i></i>-->
                    <h2>${hostState.epoch}</h2>
                </div>
                <div class="t_b_box1">
                    <span>损失值</span>
<!--                        <i></i>-->
                    <h2>${hostState.loss}</h2>
                </div>
                <div class="t_b_box2">
                    <span>准确率</span>
<!--                        <i></i>-->
                    <h2>${hostState.accuracy}</h2>
                </div>
                <div class="t_b_box3">
                    <span>模型大小</span>
<!--                        <i></i>-->
                    <h2>${hostState.model_size_mb}</h2>
                </div>
            </main>
        </div>
    `;
    }

    // 如果添加，直接加上html语句就行，如果是删除(previousHostsNum=0)，那么我把之前所有的去掉，重新添加进去
    if (previousHostsNum === 0) {
        let hosts = document.getElementsByClassName("t_right_box");
        if (hosts.length > 0) {
            // let parent = hosts[0].parentNode;
            let parent = document.getElementById("t_main");
            for (var i=0; i<myHostStates.length; i++) {   // 把之前的去掉
                parent.removeChild(hosts[i]);
            }
        }
    }

    // 插入到标签结束标记前
    document.getElementById("t_main").insertAdjacentHTML("beforeEnd", html);
    for (var i=0; i<hostStates.length; i++) {
        // console.log("host" + (previousHostsNum+i+1));
        echart_pie("host" + (previousHostsNum+i+1));
        echart_bar("host" + (previousHostsNum+i+1));
    }
}


// <div className="t_right_box" id="host1">
//     <img className="t_l_line" src="img/left_line.png" alt="">
//         <div className="top_info">
//             <img className="online_status" src="img/offline.png" alt="">
//                 <h5>2022-04-24 21:22:21</h5>
//         </div>
//         <div className="bottom_info">
//             <h5>container:sdasdqweqwe2-2132130213</h5>
//         </div>
//         <div className="host_info">
//             <h3>主机1</h3>
//             <h4>4.5.6.7</h4>
//             <h5>4.5.6.7</h5>
//         </div>
//         <div className="echart_bar" style="width: 50%; height: 3rem; position: absolute;"></div>
//         <header className="t_b_h">
//             <h3><p>第</p>15<span>轮</span></h3>
//             <div className="echart_pie" style="width: 100%; height: 40%; position: absolute; top: 17%;"></div>
//         </header>
//         <main className="t_b_m">
//             <div className="t_b_box">
//                 <span>轮数</span>
//                 <i></i>
//                 <h2>1</h2>
//             </div>
//             <div className="t_b_box1">
//                 <span>损失值</span>
//                 <i></i>
//                 <h2>56RH</h2>
//             </div>
//             <div className="t_b_box2">
//                 <span>准确率</span>
//                 <i></i>
//                 <h2>-90dBm</h2>
//             </div>
//             <div className="t_b_box3">
//                 <span>模型大小</span>
//                 <i></i>
//                 <h2>250LX</h2>
//             </div>
//         </main>
//         <img className="t_r_line" src="img/right_line.png" alt="">
// </div>











