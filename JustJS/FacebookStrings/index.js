/**
 * Implement a function which takes an array of string parameters
 * and returns a formatted string
 * similar to Facebook's likes system
 * eg. names = [], returns 'Nobody liked it yet'
 * eg. names = ['Peter'], returns 'Peter likes this'
 * eg. names = ['Peter', 'Alex'], returns 'Peter and Alex like this'
 * eg. names = ['Peter', 'Alex', 'Jim', 'Sarah'], returns 'Peter, Alex and 2 others like this'
 */
function facebookString (names) {
    if (!Array.isArray(names) || !names.length) return "Nobody liked it yet";
    if (names.length === 1) return `${names[0]} likes this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    return `${names[0]}, ${names[1]} and ${names.length - 2} other${names.length - 2 === 1 ? '' : 's'} like this`;
}