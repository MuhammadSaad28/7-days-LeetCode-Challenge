/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let result = '';
    
    for (let i = 0; i < romanValues.length; i++) {
        while (num >= romanValues[i]) {
            result += romanSymbols[i];
            num -= romanValues[i];
        }
    }
    
    return result;
};