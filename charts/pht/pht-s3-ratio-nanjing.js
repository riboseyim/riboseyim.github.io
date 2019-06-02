option_s3_ratio_nanjing = {
  title: {
    text: '3分钟(满分跳数)',
    subtext: '2013年2分钟'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: {
        show: false,
        readOnly: false
      },
      magicType: {
        show: true,
        type: ['line', 'bar']
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: false
      }
    }
  },
  legend: {
    data: ['南京', '增长率']
  },
  xAxis: [{
    type: 'category',
    data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
    axisPointer: {
      type: 'shadow'
    }
  }],
  yAxis: [{
    type: 'value',
    name: '次数',
    min: 0,
    max: 420,
    interval: 20,
    axisLabel: {
      formatter: '{value} 次'
    }
  }, {
    type: 'value',
    name: '增长率',
    min: -5,
    max: 50,
    interval: 2,
    axisLabel: {
      formatter: '{value} %'
    }
  }],
  series: [{
    name: '南京',
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#ff851b'
      }
    },
    data: [210, 300, 350, 370, 390, 400, 400]
  }, {
    name: '增长率',
    type: 'line',
    yAxisIndex: 1,
    data: [0, 42.8, 16.7, 5.7, 5.4, 2.6, 0]
  }]
};
