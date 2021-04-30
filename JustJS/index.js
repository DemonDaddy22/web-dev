// CREATING OWN BIND ON FUNCTION PROTOTYPE

Function.prototype.myBind = function (obj) {
    // console.log(this);
    const fn = this; // this points to the function on which we are calling the bind method
    const prevArgs = [].slice.call(arguments, 1);
    return function () {
        const newArgs = [].slice.call(arguments, 0);
        return fn.apply(obj, [...prevArgs, ...newArgs]);
    };
};

function multiply(...a) {
    return a.reduce((accu, curr) => accu * curr, 1);
}

function concatStr(str) {
    return `${this.str} ${str}`;
}

const boundMultiply = multiply.myBind(null, 5, 3);
console.log(boundMultiply(2, 4, 1));

const boundConcat = concatStr.myBind({ str: 'Hello' });
console.log(boundConcat('World'));

// MAKING CURRYING UTIL FUNCTION, WHICH RETURNS CURRIED VERSION OF ANY FUNCTION

function currier(func) {
    const prevArgs = [].slice.call(arguments, 1);
    const context = this;
    return function () {
        const newArgs = [].slice.call(arguments, 0);
        return func.apply(context, [...prevArgs, ...newArgs]);
    };
}

function sum(...args) {
    return args.reduce((accu, curr) => accu + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
const curriedSum = currier(sum, 1, 2, 3);
console.log(curriedSum(5, 4));

// DEBOUNCE FUNCTION TO OPTIMISE API CALLS

const getResults = (q = '') => {
    console.log(`Fetching results for ${q}...`);
};

function debounce(func, delay) {
    const context = this;
    let timeout;
    return function () {
        const args = [...arguments];
        clearTimeout(timeout); // cancels the previous function call if time taken to change input is less than delay
        timeout = setTimeout(() => func.apply(context, args), delay); // func is only called when time between 2 consecutive input changes is more than delay
    };
}

// IIFE to hide queried element in order to prevent its misuse

(function () {
    const queryInput = document.querySelector('#query');

    // executes the function for every key stroke, which can cause performance bottlenecks
    // queryInput.addEventListener('keyup', e => getResults(e.target.value));

    // using a debounced variant prevents unnecessary function calls when input changes quickly
    const debouncedSearch = debounce.call(this, getResults, 300);
    queryInput.addEventListener('keyup', e => debouncedSearch(e.target.value));
})();

// THROTTLE FUNCTION CALLS WHEN FUNCTION IS INVOKED MANY TIMES AND WE ARE CONCERNED WITH THE INTERMEDIATE STATES

const handleResize = e => {
    const { innerHeight, innerWidth } = e.target;
    if (innerHeight > innerWidth) console.log(`That has to be a mobile or a tab!`);
    else console.log(`Bet that ain't no mobile/tab`);
};

const throttle = function (func, delay) {
    const context = this;
    let canCallFunction = true; // this flag controls whether function can be called again or not
    return function () {
        if (canCallFunction) {
            const args = [...arguments];
            func.apply(context, args);
            canCallFunction = false;
            setTimeout(() => {
                canCallFunction = true; // sets to true after delay, so that func can be called again after delay amount of time
            }, delay);
        }
    };
};

(function () {
    const throttledResizing = throttle(handleResize, 100);
    window.addEventListener('resize', throttledResizing);
})();
