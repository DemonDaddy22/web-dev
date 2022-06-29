/**
 * Implement a function that takes a string parameter,
 * and returns an array containing pairs of characters.
 * If last item has only 1 character, complete it with an underscore
 * eg. str = 'abcd', returns ['ab', 'cd']
 * eg. str = 'abc', returns ['ab', 'c_']
 * eg. str = '', returns []
 */
function splitIntoPairs (str = '') {
    if (typeof str !== 'string' || !str?.length) return [];
    
    /* SOLUTION 1 */
    const pairs = [];
    const paddedString = str.length % 2 ? str.padEnd(str.length + 1, '_') : str;
    for (let i = 0; i < paddedString.length; i += 2) {
        pairs.push(paddedString.slice(i, i + 2));
    }
    return pairs;

    /*
    SOLUTION 2
    let paddedString = str.length % 2 ? str.padEnd(str.length + 1, '_') : str;
    paddedString = paddedString.split('').reduce((accu, curr) => {
        if (!accu.length) accu += curr;
        else if (accu.slice(-1) !== '-') {
            accu += `${curr}-`;
        } else {
            accu += curr;
        }
        return accu;
    }, '');

    return paddedString.slice(0, paddedString.slice(-1) === '-' ? paddedString.length - 1 : paddedString.length).split('-');
    */
}