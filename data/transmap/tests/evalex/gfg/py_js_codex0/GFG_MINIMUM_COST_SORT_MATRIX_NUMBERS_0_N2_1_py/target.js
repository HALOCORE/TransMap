function f_gold(mat, n) {
  var tot_energy = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var q = Math.floor(mat[i][j] / n);
      var i_des = q;
      var j_des = mat[i][j] - (n * q);
      tot_energy += Math.abs(i_des - i) + Math.abs(j_des - j);
    }
  }
  return tot_energy;
}

