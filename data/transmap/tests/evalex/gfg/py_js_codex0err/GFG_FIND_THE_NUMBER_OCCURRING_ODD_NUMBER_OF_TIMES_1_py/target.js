function f_gold(arr, size) {
  var Hash = {};
  for (var i = 0; i < size; i++) Hash[arr[i]] = Hash[arr[i]] + 1 || 1;
  for (var i in Hash) {
    if (Hash[i] % 2 != 0) return i;
  }
  return -1;
}

