//http://gallery.echartsjs.com/editor.html?c=xSyKKAw97l
var data=[
  {
  "time":2015,"data":[
 {"name":"Japan","value":[21796408,31.110,"日本"]},
 {"name":"United States","value":[12539154,17.897,"美国"]},
 {"name":"China","value":[9015965,12.868,"中国（含台湾）"]},
 {"name":"Germany","value":[7450000,10.633,"德国"]},
 {"name":"United Kingdom","value":[3536204,5.047,"英国"]},
 {"name":"South Korea","value":[3177226,4.535,"韩国"]},
 {"name":"France","value":[3018834,4.309,"法国"]},
 {"name":"Spain","value":[1188072,1.696,"西班牙"]},
 {"name":"Sweden","value":[1124895,1.606,"瑞典"]},
 {"name":"Italy","value":[1049634,1.498,"意大利"]},
 {"name":"Russia","value":[957313,1.366,"俄罗斯"]},
 {"name":"Holland","value":[630765,0.900,"荷兰"]},
 {"name":"Denmark","value":[502524,0.717,"丹麦"]},
 {"name":"Canada","value":[491230,0.701,"加拿大"]},
 {"name":"Finland","value":[433722,0.619,"芬兰"]}
  ]
}

]

var option = {
  baseOption: {
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut',
    timeline: {
      axisType: 'category',
      orient: 'vertical',
      autoPlay: true,
      inverse: true,
      playInterval: 5000,
      left: null,
      right: 5,
      top: 20,
      bottom: 20,
      width: 46,
      height: null,
      label: {
        normal: {
          textStyle: {
            color: '#ddd'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      symbol: 'none',
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        color: '#bbb',
        borderColor: '#777',
        borderWidth: 1
      },
      controlStyle: {
        showNextBtn: false,
        showPrevBtn: false,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      },
      data: data.map(function(ele) {
        return ele.time
      })
    },
    backgroundColor: '#404a59',
    title: {
      text: '世界主要国家专利数量变化情况 @RiboseYim',
      subtext: '数据来源：欧洲专利局 · 单位：文献索引数 \n https://riboseyim.github.io',
      left: 'center',
      top: '5%',
      textStyle: {
        fontSize: 25,
        color: 'rgba(255,255,255, 0.9)'
      }
    },
    tooltip: {
      formatter: function(params) {
        if ('value' in params.data) {
          return params.data.value[2] + ': ' + params.data.value[0];
        }
      }
    },
    grid: {
      left: '12%',
      right: '45%',
      top: '65%',
      bottom: 20
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        id: 'map',
        type: 'map',
        mapType: 'world',
        top: '10%',
        bottom: '25%',
        left: 10,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },
          emphasis: {
            label: {
              show: true
            },
            areaColor: 'rgba(255,255,255, 0.5)'
          }
        },
        data: []
      }, {
        id: 'bar',
        type: 'bar',
        tooltip: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#FFFFF'
            }
          }
        },
        data: []
      }, {
        id: 'pie',
        type: 'pie',
        radius: ['8%', '20%'],
        center: ['75%', '85%'],
        roseType: 'radius',
        tooltip: {
          formatter: '{b} {d}%'
        },
        data: [],
        label: {
          normal: {
            textStyle: {
              color: '#ddd'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#ddd'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0,0,0,0.3)',
            borderSize: 1
          }
        }
      }
    ]
  },
  options: []
}

for (var i = 0; i < data.length; i++) {
  //计算其余国家GDP
  var restPercent = 100;
  var restValue = 0;
  data[i].data.forEach(function(ele) {
    restPercent = restPercent - ele.value[1];
  });
  restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
  console.log(restPercent);
  console.log(restValue);
  option.options.push({
    visualMap: [{
      dimension: 0,
      left: 10,
      itemWidth: 12,
      min: data[i].data[14].value[0],
      max: data[i].data[0].value[0],
      text: ['High', 'Low'],
      textStyle: {
        color: '#ddd'
      },
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered', 'red']
      }
    }],
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.1],
      axisLabel: {
        show: false,
      }
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      },
      data: data[i].data.map(function(ele) {
        return ele.value[2]
      }).reverse()
    },
    series: [
      {
        id: 'map',
        data: data[i].data
      }, {
        id: 'bar',
        data: data[i].data.map(function(ele) {
          return ele.value[0]
        }).sort(function(a, b) {
          return a > b
        })
      }, {
        id: 'pie',
        data: data[i].data.map(function(ele) {
          return {
            name: ele.value[2],
            value: ele.value
          }
        }).concat({
          name: '其他国家',
          value: restValue
        }),
      }
    ]
  })
}
