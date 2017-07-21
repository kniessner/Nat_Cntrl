const chalk = require('chalk');
const log = console.log;


function CustomConsole() {
    this.self = function() {
        console.log('asas',this);
    };
    this.client = function(id,info,msg) {
        console.log(  colors.fg.Cyan,
                      colors.Bright,
                        `CLIENT  ▸ ${colors.fg.White}(${id})${colors.fg.Cyan}=/${info}/=>`, //Log group
                      colors.Reset,
                      colors.fg.White,
                        msg, // Log message
                      colors.Reset);
    };
    this.server = function(msg) {
        console.log(
                      colors.fg.Magenta,
                      colors.Blink,
                        `SERVER ${id} ->`, //Log group
                      colors.Reset,
                      colors.fg.Cyan,
                        msg, // Log message
                      colors.Reset);
    };
    this.sys = function(info,msg) {
        console.log(
                      colors.fg.Yellow,
                      colors.Dim,
                        `SYSTEM =( ${info} )=>`, //Log group
                      colors.Reset,
                      colors.fg.White,
                      colors.Dim,
                        msg, // Log message
                      colors.Reset);
    };
}
/*
log.client('hello');
log.server('hello');
log.sys('hello');
 */
 module.exports.showConsoleStyle = function () {
   const error = chalk.bold.red;
   const warning = chalk.keyword('orange');
   // Use RGB colors in terminal emulators that support it.
   log(chalk.keyword('orange')('Yay for orange colored text!'));
   log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
   log(chalk.hex('#DEADED').bold('Bold gray!'));

 // Combine styled and normal strings
 log(chalk.blue('Hello') + 'World' + chalk.red('!'));

 // Compose multiple styles using the chainable API
 log(chalk.blue.bgRed.bold('Hello world!'));

 // Pass in multiple arguments
 log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

 // Nest styles
 log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

 // Nest styles of the same type even (color, underline, background)
 log(chalk.green(
 	'I am a green line ' +
 	chalk.blue.underline.bold('with a blue substring') +
 	' that becomes green again!'
 ));
 console.log(error('Error!'));
 console.log(warning('Warning!'));
 const name = 'Sindre';
 console.log(chalk.green('Hello %s'), name);

 log(`
 CPU: ${chalk.red('90%')}
 RAM: ${chalk.green('40%')}
 DISK: ${chalk.yellow('70%')}
 `);

 // ES2015 tagged template literal
 log(chalk`
 CPU: {red ${cpu.totalPercent}%}
 RAM: {green ${ram.used / ram.total * 100}%}
 DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
 `);
 }
