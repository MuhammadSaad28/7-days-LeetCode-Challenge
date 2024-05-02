/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let base = 2; base <= n - 2; base++) {
        let num = n;
        let converted = '';
        while (num > 0) {
            converted = (num % base) + converted;
            num = Math.floor(num / base);
        }
        
        let left = 0, right = converted.length - 1;
        while (left < right) {
            if (converted[left] !== converted[right]) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};