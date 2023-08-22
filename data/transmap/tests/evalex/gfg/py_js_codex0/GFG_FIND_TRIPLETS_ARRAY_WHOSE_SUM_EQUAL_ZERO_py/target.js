function f_gold(arr, n) {
  var found = true;
  for (var i = 0; i < n - 2; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      for (var k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          console.log(arr[i], arr[j], arr[k]);
          found = true;
        }
      }
    }
  }
  if (found == false) console.log(" not exist ");
}

