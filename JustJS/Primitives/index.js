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

/**
 * 5. Write a program to reverse the input string by words, also reverse the words in place
 */
function StringReverse (str = '') {
    this.str = str;
    this.reverse = function () {
        return this.str.split(/\s/).reverse().join(' ');
    };
    this.reverseWordsInPlace = function () {
        return this.str.split(/\s/).map(word => word.split('').reverse().join('')).join(' ');
    };
};

/**
 * 6. Reverse the input integer number
 */
function reverseInteger (num = 0) {
    let reverse = 0;
    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reverse;
}

/**
 * 7. Convert 12 hours format to 24 hours format
 */
const convertTo24HrsFormat = (dateStr = '') => {
    let meridianIndex = dateStr.indexOf('AM');
    const isAM = meridianIndex >= 0;
    if (meridianIndex < 0) {
        meridianIndex = dateStr.indexOf('PM');
    }
    const [hours, minutes] = dateStr.slice(0, meridianIndex).split(':');
    return isAM
        ? `${String(hours < 12 ? hours : hours - 12).padStart(2, '0')}:${minutes.padStart(2, '0')}`
        : `${String(hours < 12 ? Number(hours) + 12 : hours).padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

/**
 * 8. Write a function which accepts a string parameter and returns the count of characters between the first and last 'X' character
 */
const getTheGapX = (str = '') => {
    const firstIndexOfX = str.indexOf('X');
    const lastIndexOfX = str.lastIndexOf('X');

    if (firstIndexOfX < 0 || lastIndexOfX < 0 || firstIndexOfX === lastIndexOfX) return -1;
    return lastIndexOfX - firstIndexOfX;
}

/**
 * 9. Write a function which truncates the input string
 */
const truncateString = (str = '', len = 0) => {
    if (typeof str !== 'string' || typeof len !== 'number' || !str.length || len < 3) return str;
    return str.length <= len ? str : `${str.slice(0, len - 3)}...`;
};