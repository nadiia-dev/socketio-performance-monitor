import os from "os";
import io from "socket.io-client";
const socket = io("http://localhost:3000");
socket.on("connect", (socket) => {
  const nI = os.networkInterfaces();
  let macA;

  for (let key in nI) {
    const isInternetFacing = !nI[key][0].internal;
    if (isInternetFacing) {
      macA = nI[key][0].mac;
      break;
    }
  }
  console.log(macA);
});

const cpuAverage = () => {
  const cpus = os.cpus();
  let idleMs = 0; //idle milliseconds
  let totalMs = 0; //total milliseconds

  cpus.forEach((aCore) => {
    for (mode in aCore.times) {
      totalMs += aCore.times[mode];
    }
    idleMs += aCore.times.idle;
  });
  return {
    idle: idleMs / cpus.length,
    total: totalMs / cpus.length,
  };
};

const getCpuLoad = () =>
  new Promise((resolve, reject) => {
    const start = cpuAverage();
    setTimeout(() => {
      const end = cpuAverage();
      const idleDiff = end.idle - start.idle;
      const totalDiff = end.total - start.total;

      // calculate the % of the used cpu
      const percentOfCpu = 100 - Math.floor((100 * idleDiff) / totalDiff); //%
      resolve(percentOfCpu);
    }, 100);
  });

const performanceLoadData = () =>
  new Promise(async (resolve, reject) => {
    // - CPU load (current)
    const cpus = os.cpus();
    // - Memory Useage
    // - total
    const totalMem = os.totalmem(); //in bytes
    // - free
    const freeMem = os.freemem(); //in bytes
    // - memory useage
    const usedMem = totalMem - freeMem;
    const memUseage = Math.floor((usedMem / totalMem) * 100) / 100; //2 decimal places
    // - OS type
    const osType = os.type() === "Darwin" ? "Mac" : os.type();

    // - uptime
    const upTime = os.uptime();

    // - CPU info
    // -Cpu Type
    const cpuType = cpus[0].model;
    // - Number of cores
    const numCores = cpus.length;
    // - Clock Speed
    const cpuSpeed = cpus[0].speed;
    const cpuLoad = await getCpuLoad();
    resolve({
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
    });
  });
