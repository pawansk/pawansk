import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ chartClass, title, seriesData, colors, labels }) => {
  const [chartData, setChartData] = useState({
   series: seriesData,
    options: {
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          
        }
      }],
      colors: colors,
      dataLabels: {
        enabled: false  
      },

      fill: {
        opacity: 1
      },legend: {
        position: 'bottom' // Set the legend position to 'bottom'
        },
      //  labels: ['DEMO_TESTMVNO',  'AttLiveTest', 'AttLiveTestAbhi',  ],
      labels: labels,
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      }
    }
  });

  return (
    <div className={`card ${chartClass}`}>
      <div className="g-0 align-items-center row">
      <div className="d-flex align-items-center justify-content-between heading">
            {title}
          </div>
        <div className="card-body">
          
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />          
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
