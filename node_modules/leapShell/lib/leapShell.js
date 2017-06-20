var leapShell = module.exports;
var leap = require('leapjs');
var cp  = require('child_process');
var running = false;


function execTask(task){
  if (running){
    return 0;
  }
  console.log('Running ....');
  running = true;
   var command = cp.exec(task ,function (error, stdout, stderr) {

   if (error) {
     console.log(error.stack);
     return -1;
   }
   if (stderr){
    console.log('Child Process STDERR: '+stderr);
    return -1;

   }
   console.log(stdout);
 });

 command.on('exit', function (code) {
   running = false;
 });
}

leapShell.detect = function(task){

  leap.loop(function(sensor){

     if (sensor.hands.length != 0){
      execTask(task);
     }
     });

}


