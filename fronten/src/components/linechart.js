import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Smartphones',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.4,
          },
          {
            label: 'Laptops',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Tristan: Monthly Tech Product Sales",
            font: {
              size: 24,
              family: "sans-serif",
            },
            color: "#ffffff",
          },
          legend: {
            labels: {
              font: {
                size: 16,
                family: "sans-serif",
              },
              color: "#ffffff",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ffffff",
              font: {
                size: 16,
                family: "sans-serif",
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
              font: {
                size: 16,
                family: "sans-serif",
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(30, 30, 47, 0.8)",
        height: "55vh",
        minWidth: "800px",
        marginTop: "5%",
        position: "relative",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
