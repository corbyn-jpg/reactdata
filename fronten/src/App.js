import React from "react";
import StackedAreaChart from "./components/stackedarea";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <StackedAreaChart />
      <BarChart />
    </div>
  );
}

export default App;