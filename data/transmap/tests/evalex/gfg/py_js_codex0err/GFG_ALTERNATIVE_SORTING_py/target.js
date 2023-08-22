function f_gold(arr, n) {
  arr.sort();
  var i = 0;
  var j = n - 1;
  while (i < j) {
    console.log(arr[j], end = " ");
    j -= 1;
    console.log(arr[i], end = " ");
    i += 1;
  }
  if (n % 2 != 0) console.log(arr[i]);
}

