cpuIAverage = function(i) {
  var cpu, cpus, idle, len, total, totalIdle, totalTick, type;
  totalIdle = 0;
  totalTick = 0;
  cpus = os.cpus();
  cpu = cpus[i];
  for (type in cpu.times) {
    totalTick += cpu.times[type];
  }
  totalIdle += cpu.times.idle;

  idle = totalIdle / cpus.length;
  total = totalTick / cpus.length;
  return {
    idle: idle,
    total: total
  };
};

cpuILoadInit = function() {
  var index=arguments[0];
  return function() {
    var start;
    start = cpuIAverage(index);
    return function() {
      var dif, end;
      end = cpuIAverage(index);
      dif = {};
      dif.cpu=index;
      dif.idle = end.idle - start.idle;
      dif.total = end.total - start.total;
      dif.percent = 1 - dif.idle / dif.total;
      return dif;
    };
  };
};
cpuILoad = (function() {
  var info=[],cpus = os.cpus();
  for (i = 0, len = cpus.length; i < len; i++) {
    var a=cpuILoadInit(i)();
    info.push( a );
  }
  return function() {
    var res=[],cpus = os.cpus();
    for (i = 0, len = cpus.length; i < len; i++) {
      res.push( info[i]() );
    }
    return res;
  }

})();
// Mock products to be used with API call.
module.exports.cpus =()=> {

  //Create function to get CPU information
  function cpuAverage() {

    //Initialise sum of idle and time of cores and fetch CPU info
    var totalIdle = 0, totalTick = 0;
    var cpus = os.cpus();

    //Loop through CPU cores
    for(var i = 0, len = cpus.length; i < len; i++) {

      //Select CPU core
      var cpu = cpus[i];

      //Total up the time in the cores tick
      for(type in cpu.times) {
        totalTick += cpu.times[type];
     }

      //Total up the idle time of the core
      totalIdle += cpu.times.idle;
    }

    //Return the average Idle and Tick times
    return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
  }

  //Grab first CPU Measure
  var startMeasure = cpuAverage();

  //Set delay for second Measure
  setTimeout(function() {

    //Grab second Measure
    var endMeasure = cpuAverage();

    //Calculate the difference in idle and total time between the measures
    var idleDifference = endMeasure.idle - startMeasure.idle;
    var totalDifference = endMeasure.total - startMeasure.total;

    //Calculate the average percentage CPU usage
    var percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);

    //Output result to console
    console.log(percentageCPU + "% CPU Usage.");

  }, 100);
};

module.exports = cpus;

var os = require("os");
