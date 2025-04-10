import "./App.css";
import socket from "../socketConnection.js";
import { useEffect } from "react";
import { useState } from "react";
import Widget from "./perfDataComponents/Widget.jsx";

function App() {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    socket.on("perfData", (data) => {
      const copyPerfData = { ...performanceData };
      copyPerfData[data.macA] = data;
      setPerformanceData(copyPerfData);
    });
  });

  const widgets = Object.values(performanceData).map((d) => (
    <Widget data={d} key={d.macA} />
  ));
  return <div>{widgets}</div>;
}

export default App;
