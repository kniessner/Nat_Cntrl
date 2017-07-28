const chalk = require('chalk');

const loga = console.log;


function CustomConsole() {
    this.self = function() {
        console.log('asas',this);
    };

    this.client = function(id,info,msg) {
        loga(chalk.hex('#F8F8F7')('CLIENT =/' + chalk.white(`${id}`) + '/=> ' +info +'('+ msg+')'));
    };
    this.server = function(id,info,msg) {
        if(id){
            loga(chalk.hex('#9070B4')('SERVER =/' + chalk.white(`${info}`) + '/=' + msg +'-('+ id +')'));
        }else{
            loga(chalk.hex('#9070B4')('SERVER =/' + chalk.white(`${info}`) + '/=' + msg ));
        }
    };
    this.sys = function(info,msg,id) {
        if(id){
            loga(chalk.hex('#32D4C2')('SYSTEM => ' + chalk.white.bold(`${info}`+ '/'+msg)  +'-('+ id +'))'));
        }else if(msg){
            loga(chalk.hex('#32D4C2')('SYSTEM => ' + chalk.white.bold(`${info}`+ '/'+msg)  ));
        }else{
            loga(chalk.hex('#32D4C2')('SYSTEM => ' + chalk.white.bold(`${info}`)));
        }
    };
    this.inf = function(info,msg,id) {
        if(id){
            loga(chalk.hex('#51A08C')('INFO <' + chalk.white.bold(`${info}`) + '>'+ id ));
        }else{
            loga(chalk.hex('#51A08C')('INFO <' + chalk.white.bold(`${info}`) + '>' ));
        }

    };
}

var log = new CustomConsole();
module.exports = log;
