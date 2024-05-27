import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SummaryChart = ({ chartClass, title, seriesData, categories, colors, text }) => {
  const [chartData, setChartData] = useState({
    series: seriesData,
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      colors: colors,
      dataLabels: {
        enabled: false  
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: categories
      },
      yaxis: {
        title: {
          text: text,
        }
      },
      fill: {
        opacity: 1
      },
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
         

          <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryChart;
