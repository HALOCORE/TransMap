function f_gold(arr, n) {
  var temp = Array(n);
  for (var i = 0; i < n; i++) temp[i] = arr[i];
  temp.sort();
  for (var front = 0; front < n; front++) {
    if (temp[front] != arr[front]) break;
  }
  for (var back = n - 1; back >= 0; back--) {
    if (temp[back] != arr[back]) break;
  }
  if (front >= back) return true;
  while (front != back) {
    front++;
    if (arr[front - 1] < arr[front]) return false;
  }
  return true;
}

