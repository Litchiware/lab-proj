function decision_chart(div_name, data_arr, title){
  // Create the chart
  $('#'+div_name).highcharts('StockChart', {

    rangeSelector: {
      selected: 1
    },

    xAxis: {
      lineWidth: 2
    },

    series: [{
      color: "#7cb5ec",
      data: data_arr.R0_H_inf
    },{
      color: "#7cb5ec",
      data: data_arr.R0_H_sup
    },{
      color: "#90ed7d",
      data: data_arr.R1_H_inf
    },{
      color: "#90ed7d",
      data: data_arr.R1_H_sup
    },{
      color: "#f7a35c",
      data: data_arr.R2_H_inf
    },{
      color: "#f7a35c",
      data: data_arr.R2_H_sup
    }]
  });
}

function state_chart(div_name, data_arr, y_title){
  // Create the chart
  $('#'+div_name).highcharts('StockChart', {

    rangeSelector: {
      selected: 1
    },

    xAxis: {
      lineWidth: 2
    },

    series: [{
      data: data_arr
    }]
  });
}
