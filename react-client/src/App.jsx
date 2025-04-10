import socket from "./utilities/socketConnection.js";
import { useEffect } from "react";
import { useState } from "react";
import Widget from "./perfDataComponents/Widget.jsx";

function App() {
  const [performanceData, setPerformanceData] = useState({});
  const perfMachineData = {};

  useEffect(() => {
    socket.on("perfData", (data) => {
      perfMachineData[data.macA] = data;
    });
  }, [perfMachineData]);

  useEffect(() => {
    setInterval(() => {
      setPerformanceData(perfMachineData);
    }, 1000);
  }, [perfMachineData]);

  const widgets = Object.values(performanceData).map((d) => (
    <Widget data={d} key={d.macA} />
  ));

  return <div className="container">{widgets}</div>;
}

export default App;
