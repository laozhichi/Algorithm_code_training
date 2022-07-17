/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 原地旋转 
    // 1. 轴对称翻转
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 2. reverse每一行
    for(let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
};
*/
