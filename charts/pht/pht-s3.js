option_s3 = {
  title: {
    text: '中学体能标准[3分钟跳绳]',
    subtext: '非标计分的折算为百分制 @RiboseYim 2019'
  },
  grid: {
    // top: '15%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  tooltip: {
    // trigger: 'axis',
    showDelay: 0,
    formatter: function(params) {
      if (params.value.length > 1) {
        return params.seriesName + ' :<br/>' + params.value[0] + '个 ' +
          params.value[1] + '分 ';
      } else {
        return params.seriesName + ' :<br/>' + params.name + ' : ' + params
          .value + '分 ';
      }
    },
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {},
      brush: {
        type: ['rect', 'polygon', 'clear']
      }
    }
  },
  brush: {},
  legend: {
    data: ['南京[男女2015]', '南京[男女2016]', '南京[男女2017]', '南京[男女2018]',
      '南京[男女2019]'
    ],
    left: 'center'
  },
  xAxis: [{
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} 个'
    },
    splitLine: {
      show: false
    }
  }],
  yAxis: [{
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} 分'
    },
    splitLine: {
      show: false
    }
  }],
  series: [{
    name: '南京[男女2015]',
    type: 'scatter',
    data: [
      [199, 0],
      [200, 10],
      [205, 20],
      [210, 30],
      [215, 40],
      [220, 60],
      [230, 70],
      [250, 80],
      [270, 85],
      [280, 93],
      [310, 96],
      [350, 100]
    ],
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [
        [{
          name: '2015',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]
      ]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }, {
        xAxis: 500
      }]
    }
  }, {
    name: '南京[男女2016]',
    type: 'scatter',
    data: [
      [199, 0],
      [200, 10],
      [205, 20],
      [210, 30],
      [215, 40],
      [220, 60],
      [230, 70],
      [250, 80],
      [270, 85],
      [300, 93],
      [330, 96],
      [370, 100]
    ],
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [
        [{
          name: '2016',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]
      ]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }, {
        xAxis: 500
      }]
    }
  }, , {
    name: '南京[男女2017]',
    type: 'scatter',
    data: [
      [199, 0],
      [200, 10],
      [210, 20],
      [220, 30],
      [230, 40],
      [250, 60],
      [270, 70],
      [300, 80],
      [330, 85],
      [350, 93],
      [370, 96],
      [390, 100]
    ],
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [
        [{
          name: '2017',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]
      ]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }, {
        xAxis: 500
      }]
    }
  }, {
    name: '南京[男女2018]',
    type: 'scatter',
    data: [
      [199, 0],
      [200, 10],
      [240, 20],
      [260, 30],
      [280, 40],
      [300, 60],
      [320, 70],
      [340, 80],
      [360, 85],
      [380, 93],
      [390, 96],
      [400, 100]
    ],
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [
        [{
          name: '2018',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]
      ]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }, {
        xAxis: 500
      }]
    }
  }, {
    name: '南京[男女2019]',
    type: 'scatter',
    data: [
      [199, 0],
      [200, 10],
      [240, 20],
      [260, 30],
      [280, 40],
      [300, 60],
      [320, 70],
      [340, 80],
      [360, 85],
      [380, 93],
      [390, 96],
      [400, 100]
    ],
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [
        [{
          name: '2019',
          xAxis: 'min',
          yAxis: 'min'
        }, {
          xAxis: 'max',
          yAxis: 'max'
        }]
      ]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }, {
        xAxis: 500
      }]
    }
  }]
};
