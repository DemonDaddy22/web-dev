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
    console.log(`Fetching results for ${q}`);
}

const debounce = function (func, delay) {
    console.log(this);
    return function() {
        func();
    }
}

// IIFE to hide queried element in order to prevent its misuse

(function() {
    const queryInput = document.querySelector('#query');
    
    // executes the function for every key stroke, which can cause performance bottlenecks
    queryInput.addEventListener('keyup', e => debounce(getResults, 300)(e.target.value));
}())