//http://gallery.echartsjs.com/editor.html?c=xrJZ60TVIg
var geoCoordMap = {
  '北京':[116.46,39.92],
  '天津':[117.2,39.13],
  '上海':[121.48,31.22],
  '重庆':[106.54,29.59],
  '江苏':[118.78,32.04],
  '浙江':[120.19,30.26],
  '安徽':[117.27,31.86],
  '江西':[115.89,28.68],
  '福建':[119.3,26.08],
  '黑龙江':[126.63,45.75],
  '吉林':[125.35,43.88],
  '辽宁':[123.38,41.8],
  '内蒙古':[111.65,40.82],
  '新疆':[87.68,43.77],
  '西藏':[91.11,29.97],
  '陕西':[108.95,34.27],
  '甘肃':[103.73,36.03],
  '宁夏':[106.27,38.47],
  '青海':[101.74,36.56],
  '山西':[112.53,37.87],
  '河北':[114.48,38.03],
  '河南':[113.65,34.76],
  '山东':[117,36.65],
  '湖北':[114.31,30.52],
  '湖南':[113,28.21],
  '广东':[113.23,23.16],
  '广西':[110.28,25.29],
  '海南':[110.35,20.02],
  '云南':[102.73,25.04],
  '贵州':[106.71,26.57],
  '四川':[104.06,30.67],
  '香港':[114.07,22.62],
  '澳门':[113.52,22.3]
};

var data = [
  {name:'北京',value:37},
  {name:'天津',value:12},
  {name:'上海',value:86},
  {name:'重庆',value:18},
{name:'江苏',value:124},
{name:'浙江',value:81},
{name:'安徽',value:44},
{name:'江西',value:20},
{name:'福建',value:44},
{name:'黑龙江',value:10},
{name:'吉林',value:14},
{name:'辽宁',value:24},
{name:'内蒙古',value:4},
{name:'新疆',value:1},
{name:'西藏',value:0},
{name:'陕西',value:21},
{name:'甘肃',value:9},
{name:'宁夏',value:1},
{name:'青海',value:0},
{name:'山西',value:10},
{name:'河北',value:22},
{name:'河南',value:19},
{name:'山东',value:39},
{name:'湖北',value:26},
{name:'湖南',value:42},
{name:'广东',value:31},
{name:'广西',value:5},
{name:'海南',value:1},
{name:'云南',value:7},
{name:'贵州',value:5},
{name:'四川',value:29},
{name:'香港',value:13},
{name:'澳门',value:0},
];

var convertData = function(data) {
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

var convertedData = [
    convertData(data),
    convertData(data.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];
data.sort(function(a,b){
 return    a.value-b.value;
})

var selectedItems = [];
    var categoryData = [];
    var barData = [];
 //   var maxBar = 30;
    var sum = 0;
    var count = data.length;
    for(var i=0;i<data.length;i++){
    categoryData.push(data[i].name);
    barData.push(data[i].value);
    sum+=data[i].value;
    }
console.log(categoryData);
console.log(sum+"   "+count)
option = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [{
        text: '中国科学院·院士分布情况·（出生地与籍贯）',
        subtext: '数据来源：中科院学部 https://riboseyim.github.io \n @RiboseYim  2018',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    }, {
        id: 'statistic',
        text: count ? '平均: ' +parseInt((sum / count).toFixed(4)) : '',
        right: 120,
        top: 40,
        width: 100,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        },
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            },
            saveAsImage: {
                show: true
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 1.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 2,
            textStyle: {
                color: '#aaa'
            }
        },
    },
    yAxis: {
        type: 'category',
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#ddd'
            }
        },
        data: categoryData
    },
    series: [{
        // name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
            return Math.max(val[2] / 20, 8);
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#ddb926',
                position: 'right',
                show: true
            }
        }
    }, {
        //  name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
          //根据实际数据调整
            return Math.max(val[2] / 2, 8);
        },
        showEffectOn: 'emphasis',
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
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }, {
        id: 'bar',
        zlevel: 2,
        type: 'bar',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        },

        data: data
    }]
};

function renderBrushed(params) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 30;
    var sum = 0;
    var count = 0;

    for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = convertedData[0][rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
    }

       selectedItems.sort(function (a, b) {
        //   return b.value[2] - a.value[2];
        return a.value-b.value;
       });

    for (var j = 0; j < Math.min(selectedItems.length, maxBar); j++) {
        categoryData.push(selectedItems[j].name);
        barData.push(selectedItems[j].value[2]);
    }

    this.setOption({
        yAxis: {
            data: categoryData
        },
        xAxis: {
            axisLabel: {
                show: !!count
            }
        },
        title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
            id: 'bar',
            //        sort:'descending',
            data: barData
        }
    });
}
