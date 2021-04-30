const greet = (person: string, date: Date): void => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};

greet('Brian', new Date());

// Function.prototype.myBind = function (obj: object) {
//     const fn: Function = this;
//     const prevArgs = [].slice.call(arguments, 1);
//     return function () {
//         const newArgs = [].slice.call(arguments, 0);
//         return fn.apply(obj, [...prevArgs, ...newArgs]);
//     };
// };

// function add(...args: number[]): number {
//     return args.reduce((accu: number, curr: number) => accu + curr, 0);
// }

// const boundSum: Function = add.myBind(null, 3, 1, 2);
// console.log(boundSum(4, 5));
