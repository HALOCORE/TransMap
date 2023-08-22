function f_gold(arr, n) {
  var brr = Array(2 * n + 1).fill(0);
  for (var i = 0; i < n; i++) brr[i] = arr[i];
  for (var i = 0; i < n; i++) brr[n + i] = arr[i];
  var maxHam = 0;
  for (var i = 1; i < n; i++) {
    var currHam = 0;
    var k = 0;
    for (var j = i; j < i + n; j++) {
      if (brr[j] != arr[k]) {
        currHam += 1;
        k = k + 1;
      }
    }
    if (currHam == n) return n;
    maxHam = Math.max(maxHam, currHam);
  }
  return maxHam;
}

