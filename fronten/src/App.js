import React from "react";
import StackedAreaChart from "./components/stackedarea";
import BarChart from "./components/BarChart";
import LineChart from "./components/linechart";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e2f", // Dark background for a modern look
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px", // Increased spacing between sections
        color: "#ffffff", // White text for contrast
        fontFamily: "'Roboto', sans-serif", // Modern font
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
        Tech Product Sales Dashboard
      </h1>

      {/* Flex container for the top two charts */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          width: "100%",
          justifyContent: "center", 
        }}
      >
        <div style={{ flex: 1, maxWidth: "800px" }}>
          <StackedAreaChart />
        </div>
        <div style={{ flex: 1, maxWidth: "800px" }}>
          <BarChart />
        </div>
      </div>

      {/* LineChart at the bottom */}
      <div style={{ width: "80%", minWidth: "800px" }}>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
