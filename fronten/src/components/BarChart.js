import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const actionGames = [15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000];
    const adventureGames = [12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000];
    const sportsGames = [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000];
    const puzzleGames = [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000];

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Action Games",
            data: actionGames,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Adventure Games",
            data: adventureGames,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Sports Games",
            data: sportsGames,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Puzzle Games",
            data: puzzleGames,
            backgroundColor: "rgba(153, 102, 255, 0.5)",
            borderColor: "rgba(153, 102, 255, 1)",
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
            text: "Games Sold by Genre Over Time",
            font: {
              size: 24,
              family: "serif",
            },
            color: "black",
          },
          legend: {
            labels: {
              font: {
                size: 16,
                family: "serif",
              },
              color: "black",
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
                family: "serif",
              },
              color: "black",
            },
            ticks: {
              color: "black",
              font: {
                size: 16,
                family: "serif",
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Number of Games Sold",
              font: {
                size: 20,
                family: "serif",
              },
              color: "black",
            },
            ticks: {
              color: "black",
              font: {
                size: 16,
                family: "serif",
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
      },
    });

    return () => chart.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(192, 253, 255, 0.8)",
        height: "55vh",
        marginTop: "5%",
        position: "relative",
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;