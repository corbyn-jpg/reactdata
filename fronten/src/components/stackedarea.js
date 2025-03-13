import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const StackedAreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const smartphones = [5000, 5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600];
    const laptops = [4500, 4700, 4900, 5100, 5300, 5500, 5700, 5900, 6100];
    const tablets = [3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800];
    const accessories = [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800];

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Smartphones",
            data: smartphones,
            borderColor: "#4bc0c0",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            fill: true,
          },
          {
            label: "Laptops",
            data: laptops,
            borderColor: "#ff6384",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            fill: true,
          },
          {
            label: "Tablets",
            data: tablets,
            borderColor: "#36a2eb",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            fill: true,
          },
          {
            label: "Accessories",
            data: accessories,
            borderColor: "#ffcd56",
            backgroundColor: "rgba(255, 205, 86, 0.5)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Corbyn: Tech Product Sales Over Time",
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
            title: {
              display: true,
              text: "Year",
              font: {
                size: 20,
                family: "sans-serif",
              },
              color: "#ffffff",
            },
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
            stacked: true,
            title: {
              display: true,
              text: "Number of Units Sold",
              font: {
                size: 20,
                family: "sans-serif",
              },
              color: "#ffffff",
            },
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

    return () => chart.destroy();
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
      <canvas ref={chartRef} />
    </div>
  );
};

export default StackedAreaChart;