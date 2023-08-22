function f_gold(symb, oper, n) {
  var F = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
  var T = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (var i = 0; i < n; i++) {
    if (symb[i] == 'F') F[i][i] = 1;
    else F[i][i] = 0;
    if (symb[i] == 'T') T[i][i] = 1;
    else T[i][i] = 0;
  }
  for (var gap = 1; gap < n; gap++) {
    var i = 0;
    for (var j = gap; j < n; j++) {
      T[i][j] = F[i][j] = 0;
      for (var g = 0; g < gap; g++) {
        var k = i + g;
        var tik = T[i][k] + F[i][k];
        var tkj = T[k + 1][j] + F[k + 1][j];
        if (oper[k] == '&') {
          T[i][j] += T[i][k] * T[k + 1][j];
          F[i][j] += tik * tkj - T[i][k] * T[k + 1][j];
        }
        if (oper[k] == '|') {
          F[i][j] += F[i][k] * F[k + 1][j];
          T[i][j] += tik * tkj - F[i][k] * F[k + 1][j];
        }
        if (oper[k] == '^') {
          T[i][j] += F[i][k] * T[k + 1][j] + T[i][k] * F[k + 1][j];
          F[i][j] += T[i][k] * T[k + 1][j] + F[i][k] * F[k +