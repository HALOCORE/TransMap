function f_gold(arr, n) {
  arr.sort((a, b) => a - b);
  var i = 0;
  var j = n - 1;
  while (i < j) {
    console.log(arr[j]);
    j -= 1;
    console.log(arr[i]);
    i += 1;
  }
  if (n % 2 != 0) console.log(arr[i]);
}

