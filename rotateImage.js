const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//didn't get accepted because using another array
var rotate = function (matrix) {
    let res = []
    for (let row = 0; row < matrix.length; row++) {
        res.push(getNewRow(row, matrix))
    }
    return res
};

const getNewRow = (row, matrix) => {
    let cols = []
    for (let i = 0; i < matrix[row].length; i++) {
        cols.push(matrix[i][row])
    }
    return cols.reverse()
}


//rotate with constant space

const rotateImage = (matrix) => {
    for(let i=0;i<matrix.length;i++) {
        for(let j =i;j<matrix.length;j++) {
            console.log(i,j)
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    console.log(matrix)
}
console.log(rotateImage(matrix))