/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }
    
    const zigzag = [];
    for (let i = 0; i < numRows; i++) {
        zigzag.push([]);
    }
    
    let row = 0;
    let direction = -1;
    for (let i = 0; i < s.length; i++) {
        zigzag[row].push(s[i]);
        if (row === 0 || row === numRows - 1) {
            direction *= -1;
        }
        row += direction;
    }
    
    let result = '';
    for (let i = 0; i < numRows; i++) {
        result += zigzag[i].join('');
    }
    
    return result;
};