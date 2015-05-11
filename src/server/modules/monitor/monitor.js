var exports = module.exports = {},
    os      = require('os'),
    diskspace = require('diskspace'),
    timer   = 60000,
    cpuStats = [],
    constants,
    io;

function displayOSData(){

    /** OS Info **/
    console.log("OS Platform: " + os.platform());
    console.log("OS Type: " + os.type());

    //console.log(os.loadavg(5)); /* Only works on Linux */
    console.log("Total Memory: " + Math.round(os.totalmem()/1024/1024) + " mb");
    console.log("Free Memory: " + Math.round(os.freemem()/1024/1024) + " mb");

    diskspace.check('C', function(err, total, free, status){
       console.log('Total space on C:/ ' + Math.round(total/1024/1024/1024) + " gb");
       console.log('Free space on C:/ ' + Math.round(free/1024/1024/1024) + " gb");
    });
}

function monitorCpus() {
    console.log("Monitoring CPUs");

    var cpuStatus = function() {

        var cpus    = os.cpus(),
            total   = 0,
            result = [];


        for(var i=0; i < cpus.length; i++) {

            for(type in cpus[i].times)
                total += cpus[i].times[type];

            for(type in cpus[i].times)
                cpus[i].times[type] = Math.round(100 * cpus[i].times[type] / total);
        }

        cpuStats.push(cpus);

        setTimeout(cpuStatus, timer);
    };
    cpuStatus();
}

function getUptime() {
    var totalSec    = os.uptime(),
        hours       = parseInt( totalSec / 3600 ) % 24,
        minutes     = parseInt( totalSec / 60 ) % 60,
        seconds     = Math.round(totalSec % 60);

    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
}

exports.initialize = function(theConstants, theIo) {
    io          = theIo;
    constants   = theConstants;

    displayOSData();
    monitorCpus();
    getUptime();
};

exports.getUptime = function() {
    return cpuStats;
};

