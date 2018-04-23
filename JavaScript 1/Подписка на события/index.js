var subscribtions = [];

module.exports = {
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
            subscribtions.push({eventName: event, subscriber: subscriber, handler: handler});
            return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
            subscribtions = subscribtions.filter(function (item) {
                return !(item.eventName == event && item.subscriber == subscriber)
            });
            return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for(var i = 0; i < subscribtions.length; i++) {
            if(subscribtions[i].eventName == event) {
                subscribtions[i].handler.call(subscribtions[i].subscriber);
            }
        }
        return this;
    }
};
