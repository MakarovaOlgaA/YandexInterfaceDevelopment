/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection)
{
    var clonedCollection = clone(collection);
    for (var i = 1; i < arguments.length; i++)
    {
      if(arguments[i].name == "innerFilter")
      {
          clonedCollection = arguments[i](clonedCollection);
      }
    }
    for (var i = 1; i < arguments.length; i++)
    {
        if(arguments[i].name == "innerSelect")
        {
           clonedCollection = arguments[i](clonedCollection);
        }
    }
    return clonedCollection;
}

/**
 * @params {String[]}
 */
function select()
{
    var properties = Array.from(arguments);

    return function innerSelect(collection)
    {
        var result = clone(collection);
        for (var i = 0; i < result.length; i++)
        {
            for (var property in result[i])
            {
                if(properties.indexOf(property) == -1)
                {
                    delete result[i][property];
                }
            }
        }
        return result;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values)
{
    return function innerFilter(collection)
    {
        var filteredCollection = [];

        for (var i = 0; i < collection.length; i++)
        {
            if(values.indexOf(collection[i][property]) != -1)
            {
                filteredCollection.push(collection[i]);
            }
        }
        return filteredCollection;
    }
}

function clone(collection)
{
    var copy = [];
    for(var i = 0; i < collection.length; i++)
    {
        copy[i] = {};
        for(var key in collection[i])
        {
            copy[i][key] = collection[i][key];
        }
    }
    return copy;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
