function f_gold(mat, n, sum) {
  for (let i = 0; i < n; i++) mat[i].sort();
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let left = 0;
      let right = n - 1;
      while (left < n && right >= 0) {
        if ((mat[i][left] + mat[j][right]) == sum) {
          console.log("(", mat[i][left], ", ", mat[j][right], "), ", end = " ");
          left += 1;
          right -= 1;
        }
        else {
          if ((mat[i][left] + mat[j][right]) < sum) left += 1;
          else right -= 1;
        }
      }
    }
  }
}

