/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (pairs[lastBracket] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};