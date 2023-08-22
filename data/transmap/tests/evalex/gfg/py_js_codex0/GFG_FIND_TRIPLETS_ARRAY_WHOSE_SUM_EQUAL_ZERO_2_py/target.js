function f_gold(arr, n) {
  var found = false;
  arr.sort();
  for (var i = 0; i < n - 1; i++) {
    var l = i + 1;
    var r = n - 1;
    var x = arr[i];
    while (l < r) {
      if (x + arr[l] + arr[r] == 0) {
        console.log(x, arr[l], arr[r]);
        l += 1;
        r -= 1;
        found = true;
      } else if (x + arr[l] + arr[r] < 0) l += 1;
      else r -= 1;
    }
  }
  if (found == false) console.log(" No Triplet Found");
}

