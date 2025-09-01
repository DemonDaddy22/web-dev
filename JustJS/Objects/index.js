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

/**
 * Implement deep clone
 */
const deepCloneUtils = (function() {
    function deepCloneObject (obj = {}) {
        if (typeof obj !== 'object' || Array.isArray(obj)) return obj;
        return Object.entries(obj).reduce((accu, curr) => {
            return {
                ...accu,
                [curr[0]]: typeof curr[1] !== 'object'
                    ? curr[1]
                    : Array.isArray(curr[1])
                        ? deepCloneArray(curr[1])
                        : deepCloneObject(curr[1])
            };
        }, {});
    };

    function deepCloneArray (arr = []) {
        if (!Array.isArray(arr)) return obj;
        return arr.reduce((accu, curr) => {
            return [
                ...accu,
                typeof curr !== 'object'
                    ? curr
                    : !Array.isArray(curr)
                        ? deepCloneObject(curr)
                        : deepCloneArray(arr)
            ];
        }, []);
    };

    return { deepCloneArray, deepCloneObject };
})();

function deepClone (val) {
    if (typeof val !== 'object') return val;
    if (Array.isArray(val)) return deepCloneUtils.deepCloneArray(val);
    return deepCloneUtils.deepCloneObject(val);
};

/**
 * 4. Create an object with a property 'marks' which cannot be set to a value less than 0
 */
const marksObj = { marks: 0 };
Object.defineProperty(marksObj, 'marks', {
    set (val) {
        if (val < 0) throw new Error('Marks can not be less than 0');
        marks = val;
    },
    get () { return marks; }
});

/**
 * 5. Create an object which has a property 'userid' which can only be set once and will be a read only property
 */
const nonWritableObj = { userId: 123 };
Object.defineProperty(nonWritableObj, 'userId', {
    writable: false,
});