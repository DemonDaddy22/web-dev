/**
 * 1. Swap 2 numbers without using any new variable
 */
const swapNums = (num1, num2) => {
    console.log({ num1, num2 });
    /* Approach 1 - can cause an issue when the numbers are too big that they can overflow the limit
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    */

   /* Approach 2 */
   [num1, num2] = [num2, num1];
    console.log({ num1, num2 });
};

/**
 * 2. Write a function which checks if the input number is an integer or not without using an inbuilt function
 */
const checkInt = (num) => (
    num % 1 === 0
);

/**
 * 3. Write a function which returns a random integer between 2 numbers (both inclusive)
 */
const getRandomNum = (lower = 0, upper = lower + 1) => (
    Math.round(lower + Math.random() * (upper - lower))
);

/**
 * 4. Reverse the input string in 3 ways
 */
const reverseString = (str = '') => {
    /* Approach 1 - using inbuilt methods
    return str.split('').reverse().join('');
    */

    /* Approach 2 - using a loop and storing the string in a variable
    let reverse = '';
    for (let ch of str.split('')) {
        reverse = `${ch}${reverse}`;
    }
    return reverse;
    */

    /* Approach 3 - using recursion */
    return !str?.length ? str : reverseString(str.slice(1)) + str.charAt(0);
};