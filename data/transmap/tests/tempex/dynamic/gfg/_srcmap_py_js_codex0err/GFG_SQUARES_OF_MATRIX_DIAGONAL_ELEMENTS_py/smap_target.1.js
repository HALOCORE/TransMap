function f_gold(mat, row, column) {
  console.log("Diagonal one : ");
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i == j) console.log("{} ".format(mat[i][j] * mat[i][j]), end = "");
    }
  }
  console.log(" \n\nDiagonal two : ");
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i + j == column - 1) console.log((mat[i][j] * mat[i][j]).toString()+' ');
    }
  }
}

