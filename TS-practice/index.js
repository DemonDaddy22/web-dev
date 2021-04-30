const greet = (person, date) => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};
greet('Brian', new Date());
Function.prototype.myBind = function (obj) {
    const fn = this;
    const prevArgs = [].slice.call(arguments, 1);
    return function () {
        const newArgs = [].slice.call(arguments, 0);
        return fn.apply(obj, [...prevArgs, ...newArgs]);
    };
};
function add(...args) {
    return args.reduce((accu, curr) => accu + curr, 0);
}
const boundSum = add.myBind(null, 3, 1, 2);
console.log(boundSum(4, 5));
