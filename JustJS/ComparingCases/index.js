/**
 * Implement a function which takes 2 arguments which are characters
 * and returns boolean value indicating whether the arguments have same casing
 * eg. a = 'a', b = 'd', returns true
 * eg. a = 'A', b = 'b', returns false
 */
function compareCases (a, b) {
    if (
        a.length !== 1 || b.length !== 1
        || typeof a !== 'string' || typeof b !== 'string'
        || !isNaN(Number(a)) || !isNaN(Number(b))
    ) return false;

    if (a.toLowerCase() === a && b.toLowerCase() === b) return true;
    if (a.toUpperCase() === a && b.toUpperCase() === b) return true;
    return false;
}