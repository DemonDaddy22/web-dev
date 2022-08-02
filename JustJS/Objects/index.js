/**
 * 1. Display all the keys and values of a nested object
 */
const keyValuePrinter = (obj = {}) => {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value !== 'object') console.log(`${key}: ${value}`);
        else keyValuePrinter(value);
    }
};

/**
 * 2. Write a program which can empty a given object
 */
const emptyObject = (obj = {}) => {
    Object.keys(obj).forEach((key) => obj.hasOwnProperty(key) && delete obj[key]);
    console.log(obj);
};