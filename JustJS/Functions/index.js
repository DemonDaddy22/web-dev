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

    return function () {
        const newArgs = [].slice.apply(arguments);
        return fn.apply(ctx, [...args.slice(1), ...newArgs]);
    };
};