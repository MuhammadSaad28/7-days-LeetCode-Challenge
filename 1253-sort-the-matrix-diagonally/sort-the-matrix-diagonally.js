/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    for (let i = 0; i < m; i++) {
        let diagonal = [];
        for (let r = i, c = 0; r < m && c < n; r++, c++) {
            diagonal.push(mat[r][c]);
        }
        diagonal.sort((a, b) => a - b);
        for (let r = i, c = 0, idx = 0; r < m && c < n; r++, c++, idx++) {
            mat[r][c] = diagonal[idx];
        }
    }
    
    for (let j = 1; j < n; j++) {
        let diagonal = [];
        for (let r = 0, c = j; r < m && c < n; r++, c++) {
            diagonal.push(mat[r][c]);
        }
        diagonal.sort((a, b) => a - b);
        for (let r = 0, c = j, idx = 0; r < m && c < n; r++, c++, idx++) {
            mat[r][c] = diagonal[idx];
        }
    }
    
    return mat;
};
