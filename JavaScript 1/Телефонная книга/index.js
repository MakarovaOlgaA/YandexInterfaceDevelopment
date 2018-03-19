// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var words = command.split(' ');
    switch (words[0])
    {
        case 'ADD':
            var name = words[1];
            var phoneNumbers = words[2].split(',');

            if(phoneBook.hasOwnProperty(name))
            {
                phoneBook[name] = phoneBook[name].concat(phoneNumbers);
            }
            else
            {
                phoneBook[name] = phoneNumbers;
            }
            break;

        case 'REMOVE_PHONE':
            var isDeleted = false;
            var numberToDelete = words[1];

            for (var name in phoneBook)
            {
                var indx = phoneBook[name].indexOf(numberToDelete);
                if (indx != -1)
                {
                    phoneBook[name].splice(indx, 1);
                    isDeleted = true;
                    break;
                }
            }
            return isDeleted;

        case 'SHOW':
            var entries = [];

            for (var name in phoneBook)
            {
                if(phoneBook[name].length == 0)
                {
                    continue;
                }
                var entry = name + ": " + phoneBook[name].join(", ");
                entries.push(entry);
            }
            return entries.sort();
    }
};
