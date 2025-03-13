import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const osSales = [15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000];
    const productivitySales = [12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000];
    const gameSales = [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000];
    const utilitySales = [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000];

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Operating Systems",
            data: osSales,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Productivity Software",
            data: productivitySales,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Games",
            data: gameSales,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Utilities",
            data: utilitySales,
            backgroundColor: "rgba(255, 205, 86, 0.5)",
            borderColor: "rgba(255, 205, 86, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Mario: Software Sales by Category Over Time",
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
            title: {
              display: true,
              text: "Number of Licenses Sold",
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

export default BarChart;