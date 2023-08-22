
function f_gold (org, seqs) {
  var n = org.length;
  var nums = new Set();
  for (var _i = 0; _i < seqs.length; _i++) {
    var seq = seqs[_i];
    for (var _j = 0; _j < seq.length; _j++) {
      var num = seq[_j];
      if (num < 1 || num > n) {
        return false;
      }
      nums.add(num);
    }
  }
  if (nums.size < n) {
    return false;
  }
  var edges = new Map();
  var indegree = Array(n + 1).fill(0);
  for (var _i2 = 0; _i2 < seqs.length; _i2++) {
    var seq = seqs[_i2];
    var i = seq[0];
    for (var _j2 = 1; _j2 < seq.length; _j2++) {
      var j = seq[_j2];
      if (edges.has(i)) {
        edges.get(i).push(j);
      } else {
        edges.set(i, [j]);
      }
      indegree[j] += 1;
      i = j;
    }
  }
  var q = [];
  for (var i = 1; i <= n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }
  var cnt = 0;
  while (q.length > 0) {
    if (q.length > 1 || org[cnt] != q[0]) {
      return false;
    }
    var i = q.shift();
    cnt += 1;
    for (var _i3 = 0; _i3 < edges.get(i).length; _i3++) {
      var j = edges.get(i)[_i3];
      indegree[j] -= 1;
      if (indegree[j] == 0) {
        q.push(j);
      }