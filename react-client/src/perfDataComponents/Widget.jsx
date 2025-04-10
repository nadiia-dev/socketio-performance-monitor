import "./Widget.css";
import Cpu from "./Cpu";
import Memory from "./Memory";
import Info from "./Info";

const Widget = ({ data }) => {
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
  return (
    <div className="widget row justify-content-evenly">
      <h1>Wiget</h1>
      <Cpu data={cpuData} />
      <Memory data={memData} />
      <Info data={infoData} />
    </div>
  );
};

export default Widget;
