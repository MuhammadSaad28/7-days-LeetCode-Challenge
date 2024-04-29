/**
 * @param {string} s
 * @return {number}
 */
// const strings = document.getElementById('strings');
// let s= "   fly me   to   the moon  ";
var lengthOfLastWord = function(s) {
    let length = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    // strings.innerHTML = length;
    return length;
};
