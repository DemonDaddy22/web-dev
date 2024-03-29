/**
 * 1. Design a calulator constructor function for 2 number inputs which can perform
 * sum, difference, product and dividend functionalities
 */
function Calculator(num1 = 0, num2 = num1) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = () => this.num1 + this.num2;
    this.difference = () => this.num1 - this.num2;
    this.multiply = () => this.num1 * this.num2;
    this.dividend = () => !this.num2 ? 0 : this.num1 % this.num2;
}

/**
 * 2. Design a private counter function which exposes increment and fetch functionalities
 */
function Counter() {
    let counter = 0;

    return {
        fetchCounter: () => counter,
        increment: () => { counter += 1; },
    };
}

/**
 * 3. Write a polyfill for bind function
 */
Function.prototype.myBind = function () {
    const args = [].slice.apply(arguments);
    const ctx = args[0];
    const fn = this;

    const noop = function () {};
    const bound = function () {
        const newArgs = [].slice.apply(arguments);
        return fn.apply((
            this instanceof noop && ctx ? this : ctx
        ), [...args.slice(1), ...newArgs]);
    };

    noop.prototype = this.prototype;
    bound.prototype = new noop();
    return bound;
};

/**
 * 4. Write a polyfill for soft bind. It is a function which will create a function
 * bounded to the context like bind, but can be overridden when the context is set explicitly
 */
Function.prototype.softBind = function () {
    const args = [].slice.apply(arguments);
    const ctx = args[0];
    const fn = this;

    const bound = function () {
        const newArgs = [].slice.apply(arguments);
        const newCtx = !this || this === window ? ctx : this;
        return fn.apply(newCtx, [...args.slice(1), ...newArgs]);
    };

    bound.prototype = Object.create(fn.prototype);
    return bound;
};

/**
 * 5. Write a function which evaluates multiply(a)(b) and returns product of a and b
 */
const multiply = (a) => (b) => a * b;

/**
 * 6. Create a function which takes another function as an argument and makes it eligible for currying or partial application
 */
const curryFunc = (fn) => {
    return function curry (...args) {
        if (fn.length <= args.length) return fn.apply(this, args); // base condition
        else return function (...newArgs) {
            return curry.apply(this, args.concat(newArgs));
        }
    };
};

/**
 * 7. Implement a debounce function
 */
function debounce (fn, delay, ctx) {
    let timer;

    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this ?? ctx, args), delay);
    }
};

/**
 * 8. Implement a throttle function
 */
function throttle (fn, delay, ctx) {
    let isFunctionCalled = false;

    return function (...args) {
        if (!isFunctionCalled) {
            isFunctionCalled = true;
            fn.apply(this ?? ctx, args);
            setInterval(() => {
                isFunctionCalled = false;
            }, delay);
        }
    };
};

/**
 * 9. Implement a sampling function
 */
function sampling (fn, count, ctx) {
    let counter = 0;

    return function (...args) {
        counter += 1;
        if (counter < count) return;

        fn.apply(this ?? ctx, args);
        counter = 0;
    };
};

/**
 * 10. Write a singleton function to create an object only once
 */
const Singleton = (function () {
    let instance;

    function createInstance (data) {
        let newInstance = new Object(data);
        return newInstance;
    }

    function getInstance (data) {
        if (!instance) {
            instance = createInstance(data);
        }
        return instance;
    }

    return {
        getInstance,
    };
})();

/**
 * 11. Design a function with toggle functionality for given list of inputs
 * where toggle function accepts list of values to be toggled upon
 */
const toggle = (...values) => {
    let index;

    return () => {
        index = isNaN(index) ? 0 : (index + 1) % values.length;
        return values[index];
    };
};

/**
 * 12. Design a function which can keep receiving the arguments on each
 * function call and returns the sum when no argument is passed
 */
const sum = (a) => (b) => !isNaN(b) ? a : sum(a + b);

/**
 * 13. Create a range function which returns an array for the provided inputs as start and end
 */
const range = (start, end) => {
    if (isNaN(end)) {
        return (newEnd) => range(start, newEnd)
    }

    return end < start
        ? []
        : new Array(end - start + 1).fill(0).map((_) => start++);
};

/**
 * 14. Write a function which takes a function as an argument to achieve memoization
 */
const memoize = (fn) => {
    const store = {};

    return (...args) => {
        const key = JSON.stringify(args);
        if (!store[key]) {
            store[key] = fn(...args);
        }
        return store[key];
    };
};

/**
 * 15. Create an interface for a function such that whenever a
 * function is triggered the system should log the time.
 * Do not modify the function code.
 */
 function generateSecretObject (key, value) {
    return { [key]: value };
}

// helpful in creating wrapper utils which can do the logging part
generateSecretObject = new Proxy(generateSecretObject, {
    apply(target, ctx, args) {
        console.log(`${new Date().toUTCString()}: ${target.name} is triggered with ${JSON.stringify(args)}`);
        return target.apply(ctx, args);
    }
});

/**
 * 16. Create an interface exposing subscribe and publish functionality,
 * which allows publishing data which in turn invokes all the subscribers with the data
 */
const pubSub = () => {
    const subscribers = [];

    const publish = (data) => {
        subscribers.forEach((sub) => sub(data));
    }

    const subscribe = (fn) => {
        subscribers.push(fn);
    }

    return { publish, subscribe };
};