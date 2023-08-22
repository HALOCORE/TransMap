function f_gold(mat, r, c) {
  var a = 0;
  var b = 2;
  var low_row = 0 > a ? 0 : a;
  var low_column = 0 > b ? 0 : b - 1;
  var high_row = r - 1 >= (a + 1) ? a + 1 : r - 1;
  var high_column = c - 1 >= (b + 1) ? b + 1 : c - 1;
  while(low_row > 0 - r && low_column > 0 - c) {
    var i = low_column + 1;
    while(i <= high_column && i < c && low_row >= 0) {
      console.log(mat[low_row][i]);
      i += 1;
    }
    low_row -= 1;
    i = low_row + 2;
    while(i <= high_row && i < r && high_column < c) {
      console.log(mat[(i+mat.length)%mat.length][(high_column+mat[0].length)%mat[0].length]);
      i += 1;
    }
    high_column += 1;
    i = high_column - 2;
    while(i >= low_column && i >= 0 && high_row < r) {
      console.log(mat[high_row][i]);
      i -= 1;
    }
    high_row += 1;
    i = high_row - 2;
    while(i > low_row && i >= 0 && low_column >= 0) {
      console.log(mat[i][low_column]);
      i -= 1;
    }
    low_column -= 1;
  }
  console.log();
}

