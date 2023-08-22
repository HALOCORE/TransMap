function f_gold(arr, n) {
  var q = [];
  arr.sort();
  q.push(arr[0]);
  for (var i = 1; i < n; i++) {
    var now = q[0];
    if (arr[i] >= 2 * now) q.shift();
    q.push(arr[i]);
  }
  return q.length;
}

