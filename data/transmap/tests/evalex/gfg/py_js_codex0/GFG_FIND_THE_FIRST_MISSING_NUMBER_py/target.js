function f_gold(array, start, end) {
  if (start > end) return end + 1;
  if (start != array[start]) return start;
  var mid = Math.floor((start + end) / 2);
  if (array[mid] == mid) return f_gold(array, mid + 1, end);
  return f_gold(array, start, mid);
}

