/**
 * Implement a function which takes a string parameter
 * and returns a camel cased string
 * after removing all the dash or underscore delimiters
 * in the initial string
 * eg. str = 'hello-world', returns 'helloWorld'
 * eg. str = 'first_name', returns 'firstName'
 */
function removeDelimiter (str) {
    if (typeof str !== 'string' || !str.length) return '';

    const words = str.split(/[-_]/)
    let finalStr = `${words[0] ?? ''}`;

    for (let i = 1; i < words.length; i++) {
        finalStr += `${words[i].slice(0, 1).toUpperCase()}${words[i].slice(1)}`;
    }

    return finalStr;
}