import React, {useEffect, useRef} from 'react';	
import {Chart} from 'chart.js';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const action = [100, 190, 540, 320, 150, 900, 200, 320, 500];
    const horror = [50, 540, 500, 510, 190, 600, 200, 170, 999];
    const scifi = [200, 300, 400, 500, 3400, 3500, 3600, 3700, 3800];
    const romance = [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800];

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
            {
                label: "Action",
                data: action,
                borderColor: "#000000",
                backgroundColor: "rgba(184, 45, 45, 0.7)",
                fill: true,
              },
              {
                label: "Horror",
                data: horror,
                borderColor: "#000000",
                backgroundColor: "rgba(25, 115, 57, 0.5)",
                fill: true,
              },
              {
                label: "Science Fiction",
                data: scifi,
                borderColor: "#000000",
                backgroundColor: "rgb(75, 165, 192)",
                fill: true,
              },
              {
                label: "Romance",
                data: romance,
                borderColor: "#000000",
                backgroundColor: "rgba(255, 181, 245, 0.78)",
                fill: true,
              }
        ]
      }
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(160, 167, 125, 0.8)",
        height: "55vh",
        marginTop: "5%",
        position: "relative", 
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;