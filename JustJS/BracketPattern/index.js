/**
 * Implement a function that takes a string of braces, brackets and parentheses, 
 * and determines if the passed sequence is balanced or not
 * eg. pattern = '()', returns true
 * eg. pattern = '[]({})', returns true
 * eg. pattern = ')[]', returns false
 */
function areBracketsBalanced (pattern) {
    const stack = [];
    for (let bracket of pattern) {
        if (bracket.match(/[({[]/)) { stack.unshift(bracket); }
        else if (
            (bracket === ')' && stack[0] === '(')
            || (bracket === ']' && stack[0] === '[')
            || (bracket === '}' && stack[0] === '{')
        ) { stack.shift(); }
        else return false;
    }
    return !stack.length;
}