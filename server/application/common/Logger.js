var log4js = require('log4js');

Logger = function(){

    log4js.configure({
        appenders: [
            { type: 'console' },
            { type: 'file', filename:'./server/application/logs/applog.log', category: 'Error description:' }
        ]});

    this.logger = log4js.getLogger('Error description:');
    this.logger.setLevel('ERROR');
};

Logger.prototype.log = function(err){
    this.logger.error(err);
};


module.exports = function(){
    return new Logger();
};