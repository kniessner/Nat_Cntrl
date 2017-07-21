
function CustomConsole() {
    this.self = function() {
        console.log('asas',this);
    };
    this.client = function(id,info,msg) {
        console.log(  colors.fg.Cyan,
                      colors.Bright,
                        `CLIENT ${colors.fg.White}(${id})${colors.fg.Cyan}=/${info}/=>`, //Log group
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

var log = new CustomConsole();
module.exports = log;
