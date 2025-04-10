import Cpu from "./Cpu";
import Memory from "./Memory";
import Info from "./Info";

const Widget = ({ data }) => {
  const {
    freeMem,
    totalMem,
    usedMem,
    memUseage,
    osType,
    upTime,
    cpuType,
    numCores,
    cpuSpeed,
    cpuLoad,
    macA,
  } = data;

  const cpuData = { cpuLoad };
  const memData = { freeMem, totalMem, usedMem, memUseage };
  const infoData = { macA, osType, upTime, cpuType, cpuSpeed, numCores };
  return (
    <>
      <h1>Wiget</h1>
      <Cpu data={cpuData} />
      <Memory data={memData} />
      <Info data={infoData} />
    </>
  );
};

export default Widget;
