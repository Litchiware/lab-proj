function decision_chart(div_name, title, y_title){
  var chart = new Highcharts.Chart({
    chart: {
      type: 'spline',                                                     
      renderTo: div_name
    },
    title: {                                                                
      text: title
    },                                                                      
    credits: {
      enabled: false
    },
    legend: {                                                               
      enabled: false                                                      
    },                                                                      
    xAxis: {
    },
    yAxis: {                                                                
      title: {                                                            
        text: y_title
      }                                                                
    },                                                                      
    tooltip: {                                                              
      enabled: false,
      formatter: function() {                                             
        return '<b>'+ this.series.name +'</b><br>'+                
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br>'+
        Highcharts.numberFormat(this.y, 2);                         
      }                                                                   
    },                                                                      
    series: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
  });
  return chart;
}

function state_charts(div_name, title, y_title){
  var chart = new Highcharts.Chart({
    chart: {
      type: 'spline',                                                     
      renderTo: div_name
    },
    title: {                                                                
      text: title
    },                                                                      
    credits: {
      enabled: false
    },
    legend: {                                                               
      enabled: false                                                      
    },                                                                      
    xAxis: {
    },
    yAxis: {                                                                
      title: {                                                            
        text: y_title
      }                                                                
    },                                                                      
    tooltip: {                                                              
      enabled: false,
      formatter: function() {                                             
        return '<b>'+ this.series.name +'</b><br>'+                
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br>'+
        Highcharts.numberFormat(this.y, 2);                         
      }                                                                   
    },                                                                      
    series: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]        
    }]
  });
  return chart;
}
