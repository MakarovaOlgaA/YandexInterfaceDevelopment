/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var hashtags = [];
    hashtags = tweet.split(" ").filter(filterHashtags).map(extractHastagWord);
    return hashtags;
};

function filterHashtags(word) {
    if (word.startsWith('#')) {
        return true;
    }
    return false;
}

function extractHastagWord(word, i, arr) {
    return word.substr(1);
}