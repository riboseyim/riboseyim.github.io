option = {
  title: {
    text: '全国中学体能测试标准[1分钟跳绳]',
    subtext: '非标计分的折算为百分制 @RiboseYim 2019'
  },
  grid: {
    left: '5%',
    right: '10%',
    bottom: '30%',
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
    data: ['广州[女2019]', '广州[男2019]', '广州[女2021]', '广州[男2021]', '天津[女2019]',
      '天津[男2019]'
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
    name: '广州[女2019]',
    type: 'scatter',
    data: [
      [24, 0],
      [32, 5],
      [40, 10],
      [48, 15],
      [56, 20],
      [64, 25],
      [72, 30],
      [80, 35],
      [88, 40],
      [96, 45],
      [104, 50],
      [112, 55],
      [120, 60],
      [126, 65],
      [132, 70],
      [138, 75],
      [144, 80],
      [150, 85],
      [156, 90],
      [166, 95],
      [176, 100]
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
          name: '女',
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
        xAxis: 200
      }]
    }
  }, {
    name: '广州[男2019]',
    type: 'scatter',
    data: [
      [24, 0],
      [32, 5],
      [40, 10],
      [48, 15],
      [56, 20],
      [64, 25],
      [72, 30],
      [80, 35],
      [88, 40],
      [96, 45],
      [104, 50],
      [112, 55],
      [120, 60],
      [126, 65],
      [132, 70],
      [138, 75],
      [144, 80],
      [150, 85],
      [156, 90],
      [166, 95],
      [176, 100]
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
          name: '男',
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
        xAxis: 200
      }]
    }
  }, {
    name: '广州[女2021]',
    type: 'scatter',
    data: [
      [24, 0],
      [32, 5],
      [40, 10],
      [48, 15],
      [56, 20],
      [64, 25],
      [72, 30],
      [80, 35],
      [88, 40],
      [96, 45],
      [104, 50],
      [112, 55],
      [120, 60],
      [126, 65],
      [132, 70],
      [138, 75],
      [144, 80],
      [150, 85],
      [156, 90],
      [166, 95],
      [176, 100]
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
          name: '女',
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
        xAxis: 200
      }]
    }
  }, {
    name: '广州[男2021]',
    type: 'scatter',
    data: [
      [20, 0],
      [28, 5],
      [36, 10],
      [44, 15],
      [52, 20],
      [60, 25],
      [68, 30],
      [76, 35],
      [84, 40],
      [92, 45],
      [100, 50],
      [108, 55],
      [116, 60],
      [124, 65],
      [132, 70],
      [140, 75],
      [148, 80],
      [156, 85],
      [164, 90],
      [179, 95],
      [194, 100]
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
          name: '男',
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
        xAxis: 200
      }]
    }
  }, {
    name: '天津[女2019]',
    type: 'scatter',
    data: [
      [58, 1],
      [65, 2],
      [67, 3],
      [69, 5],
      [71, 8],
      [73, 10],
      [75, 13],
      [77, 16],
      [79, 19],
      [81, 22],
      [83, 25],
      [85, 28],
      [87, 31],
      [89, 34],
      [91, 37],
      [93, 40],
      [95, 43],
      [97, 46],
      [99, 49],
      [101, 52],
      [103, 55],
      [105, 58],
      [107, 61],
      [109, 64],
      [111, 67],
      [113, 70],
      [115, 73],
      [117, 76],
      [119, 79],
      [121, 82],
      [123, 85],
      [125, 88],
      [127, 91],
      [129, 94],
      [131, 97],
      [133, 100]
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
          name: '女',
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
        xAxis: 200
      }]
    }
  }, {
    name: '天津[男2019]',
    type: 'scatter',
    data: [
      [64, 1],
      [72, 2],
      [74, 3],
      [76, 5],
      [78, 8],
      [80, 10],
      [82, 13],
      [84, 16],
      [86, 19],
      [88, 22],
      [90, 25],
      [92, 28],
      [94, 31],
      [96, 34],
      [98, 37],
      [100, 40],
      [102, 43],
      [104, 46],
      [106, 49],
      [108, 52],
      [110, 55],
      [112, 58],
      [114, 61],
      [116, 64],
      [118, 67],
      [120, 70],
      [122, 73],
      [124, 76],
      [126, 79],
      [128, 82],
      [130, 85],
      [132, 88],
      [134, 91],
      [136, 94],
      [138, 97],
      [140, 100]
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
          name: '男',
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
        xAxis: 200
      }]
    }
  }]
};
