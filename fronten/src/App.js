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
        backgroundColor: "#f0f0f0",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px", // ✅ Adds spacing between charts
      }}
    >
      <StackedAreaChart />
      <BarChart />
      <div style={{ width: "80%", minWidth: "800px" }}> {/* ✅ Ensures proper size */}
        <LineChart />
      </div>
    </div>
  );
}

export default App;
