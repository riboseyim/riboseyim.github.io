option_s3_ratio_guangzhou = {
  title: {
    text: '1分钟(满分跳数)',
    x: 'center'
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
    orient: 'horizontal', //horizontal vertical
    left: 'center',
    top: '5%',
    data: ['广州', '天津女', '天津男', '合肥女', '合肥男', '增长率']
  },
  xAxis: [{
    type: 'category',
    data: ['2019年', '2021年'],
    axisPointer: {
      type: 'shadow'
    }
  }],
  yAxis: [{
    type: 'value',
    name: '次数',
    min: 0,
    max: 220,
    interval: 10,
    axisLabel: {
      formatter: '{value} 次'
    }
  }, {
    type: 'value',
    name: '增长率',
    min: 0,
    max: 15,
    interval: 1,
    axisLabel: {
      formatter: '{value} %'
    }
  }],
  series: [{
    name: '广州',
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#001f3f'
      }
    },
    data: [176, 194]
  }, {
    name: '天津女',
    type: 'bar',
    data: [133, 133]
  }, {
    name: '天津男',
    type: 'bar',
    data: [140, 140]
  }, , {
    name: '合肥女',
    type: 'bar',
    data: [172, 172]
  }, {
    name: '合肥男',
    type: 'bar',
    data: [180, 180]
  }, {
    name: '增长率',
    type: 'line',
    yAxisIndex: 1,
    data: [0, 10.2]
  }]
};
