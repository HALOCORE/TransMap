function f_gold(mat, n) {
  var row_sum = 0;
  var col_sum = 0;
  for (var i = 0; i < n; i++) row_sum += mat[Math.floor(n / 2)][i];
  console.log("Sum of middle row = ", row_sum);
  for (var i = 0; i < n; i++) col_sum += mat[i][Math.floor(n / 2)];
  console.log("Sum of middle column = ", col_sum);
}

