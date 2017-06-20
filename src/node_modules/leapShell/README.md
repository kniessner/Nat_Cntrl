# leapShell

A node module that runs a shell command when at least one hand is detected by the Leap Motion sensor.

### Basic Usage
  ```javascript

  var leapShell = require('leapShell');
  var shellCommand = 'gulp test';

  leapShell.detect(shellCommand);

  ```

