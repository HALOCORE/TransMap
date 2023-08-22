function f_gold(mat, m, n) {
  var rowSum = Array(m).fill(0);
  for (var i = 0; i < m; i++) {
    var sum = 0;
    for (var j = 0; j < n; j++) sum += mat[i][j];
    rowSum[i] = sum;
  }
  var max_diff = rowSum[1] - rowSum[0];
  var min_element = rowSum[0];
  for (var i = 1; i < m; i++) {
    if (rowSum[i] - min_element > max_diff) max_diff = rowSum[i] - min_element;
    if (rowSum[i] < min_element) min_element = rowSum[i];
  }
  return max_diff;
}

