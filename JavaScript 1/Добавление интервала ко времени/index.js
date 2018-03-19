var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval)
{
    var hoursToAdd = Math.floor(interval / MINUTES_PER_HOUR);
    var minutesToAdd = interval % MINUTES_PER_HOUR;
    minutes += minutesToAdd;
    if(minutes >= MINUTES_PER_HOUR)
    {
        minutes = minutes % MINUTES_PER_HOUR;
        hoursToAdd++;
    }
    hours += hoursToAdd;
    hours = hours % HOURS_PER_DAY;
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(hours < 10)
    {
        hours = "0" + hours;
    }
    return hours + ":" + minutes;
};
