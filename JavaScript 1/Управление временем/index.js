/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var obj =
        {
            dateTime: new Date(date),

            changeDate: function (units, measure)
            {
                switch (measure.toLowerCase()) {
                    case "years":
                        this.dateTime.setFullYear(this.dateTime.getFullYear() + units);
                        break;
                    case "months":
                        this.dateTime.setMonth(this.dateTime.getMonth() + units);
                        break;
                    case "days":
                        this.dateTime.setDate(this.dateTime.getDate() + units);
                        break;
                    case "hours":
                        this.dateTime.setHours(this.dateTime.getHours() + units);
                        break;
                    case "minutes":
                        this.dateTime.setMinutes(this.dateTime.getMinutes() + units);
                        break;
                    default:
                        throw new TypeError("Unknown measure.")
                }
            },

            add: function (units, measure)
            {
                if (units < 0)
                {
                    throw new TypeError("Units cannot be negative.")
                }

                this.changeDate(units, measure);
                return this;
            },

            subtract: function (units, measure)
            {
                if (units < 0)
                {
                    throw new TypeError("Units cannot be negative.")
                }

                this.changeDate(-units, measure);
                return this;
            }
        };

    Object.defineProperty(obj, "value",
        {
            get: function()
            {
                var months = padTwo(this.dateTime.getMonth() + 1);
                var days = padTwo(this.dateTime.getDate());
                var hours = padTwo(this.dateTime.getHours());
                var minutes = padTwo(this.dateTime.getMinutes());
                var dateStr = this.dateTime.getFullYear() + "-" + months + "-" + days + " " + hours + ":" + minutes;
                return dateStr;
            }
        });

    return obj;
};

function padTwo(number)
{
    return (number < 10 ? '0' : '') + number
}