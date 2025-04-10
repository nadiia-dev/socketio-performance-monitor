import "./Widget.css";
import Cpu from "./Cpu";
import Memory from "./Memory";
import Info from "./Info";
import { useEffect, useState } from "react";
import socket from "../utilities/socketConnection";

const Widget = ({ data }) => {
  const [isAlive, setIsAlive] = useState(true);

  const {
    freeMem,
    totalMem,
    usedMem,
    memUsage,
    osType,
    upTime,
    cpuType,
    numCores,
    cpuSpeed,
    cpuLoad,
    macA,
  } = data;

  const cpuData = { cpuLoad };
  const memData = { freeMem, totalMem, usedMem, memUsage };
  const infoData = { macA, osType, upTime, cpuType, cpuSpeed, numCores };

  const notAliveDiv = !isAlive ? (
    <div className="not-active">Offline</div>
  ) : (
    <></>
  );

  useEffect(() => {
    socket.on("isConnected", ({ machineMacA, isAlive }) => {
      if (machineMacA === macA) {
        setIsAlive(isAlive);
      }
    });
  }, [macA]);

  return (
    <div className="widget row justify-content-evenly">
      {notAliveDiv}
      <Cpu data={cpuData} />
      <Memory data={memData} />
      <Info data={infoData} />
    </div>
  );
};

export default Widget;
