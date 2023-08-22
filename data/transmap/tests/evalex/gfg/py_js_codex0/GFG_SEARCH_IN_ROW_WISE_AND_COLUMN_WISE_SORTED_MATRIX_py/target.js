function f_gold(mat, n, x) {
  var i = 0;
  var j = n - 1;
  while(i < n && j >= 0) {
    if(mat[i][j] == x) {
      console.log("n Found at ", i, ", ", j);
      return 1;
    }
    if(mat[i][j] > x) j -= 1;
    else i += 1;
  }
  console.log("Element not found");
  return 0;
}

