function f_gold(arr, size, KthIndex) {
  let dict = {};
  let vect = [];
  for (let i = 0; i < size; i++) {
    if (arr[i] in dict) dict[arr[i]] = dict[arr[i]] + 1;
    else dict[arr[i]] = 1;
  }
  for (let i = 0; i < size; i++) {
    if (dict[arr[i]] > 1) continue;
    else KthIndex = KthIndex - 1;
    if (KthIndex == 0) return arr[i];
  }
  return -1;
}

