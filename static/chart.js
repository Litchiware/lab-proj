function decision_chart(chart_container$){
  var ct = chart_container$.attr('id').split('_')[0]; //ct: chart type flag
  // Create the chart
  chart_container$.highcharts('StockChart', {

    title: {
      text: chart_titles[chart_types.indexOf(ct)]
    },

    legend: {
      enabled: true,
      labelFormatter: function () {
        return window.series_legends[this._i]
      }
    },

    credits: {
      enabled: false
    },

    rangeSelector: {
      selected: 1,
      enabled: false
    },

    xAxis: {
      lineWidth: 2
    },

    plotOptions: {
      series: {
        animation: {
          duration: 3000
        }
      }
    },

    series: function(){
      ret = [];
      var list1 = ['R0_', 'R1_', 'R2_'];
      var list2 = ['_inf','_sup'];
      for (var i in list1){
        for (var j in list2){
          ret.push({
            color: window.series_colors[i],
            data: window.data[list1[i]+ct+list2[j]]
          });
        }
      }
      return ret;
    }()
  });
}

function state_chart(chart_container$){
  // Create the chart
  var ct = chart_container$.attr('id'); //ct: chart type
  
  chart_container$.highcharts( {

    plotOptions: {
      series: {
        animation: {
          duration: 3000
        }
      }
    },

    title: {
      text: chart_titles[chart_types.indexOf(ct)]
    },

    legend: {
      enabled: false
    },

    credits: {
      enabled: false
    },

    xAxis: {
      lineWidth: 2
    },

    yAxis: {
      title:{
        text: chart_value_labels[chart_types.indexOf(ct)]
      }
    },

    series: function(){
      return [{
        color: window.series_colors[chart_types.indexOf(ct)],
        data: window.data[ct]
      }];
    }()

  });
}
