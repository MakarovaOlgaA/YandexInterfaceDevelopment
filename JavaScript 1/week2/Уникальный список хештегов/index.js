/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    hashtagsDistinct = [];

    for (var i = 0; i < hashtags.length; i++) {
        if(!hashtagsDistinct.includes(hashtags[i].toLowerCase()))
        {
            hashtagsDistinct.push(hashtags[i].toLowerCase());
        }
    }

    return hashtagsDistinct.join(', ')
};