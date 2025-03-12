import React, { useState } from "react";
import StackedAreaChart from "./components/stackedarea";

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
    </div>
  );
}

export default App;