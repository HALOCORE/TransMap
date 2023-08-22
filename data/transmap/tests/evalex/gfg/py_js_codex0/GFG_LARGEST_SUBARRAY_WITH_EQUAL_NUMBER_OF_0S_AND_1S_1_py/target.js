function f_gold(arr, n) {
  let hash_map = {};
  let curr_sum = 0;
  let max_len = 0;
  let ending_index = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) arr[i] = -1;
    else arr[i] = 1;
  }
  for (let i = 0; i < n; i++) {
    curr_sum = curr_sum + arr[i];
    if (curr_sum == 0) {
      max_len = i + 1;
      ending_index = i;
    }
    if (curr_sum + n in hash_map) max_len = Math.max(max_len, i - hash_map[curr_sum + n]);
    else hash_map[curr_sum] = i;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] == -1) arr[i] = 0;
    else arr[i] = 1;
  }
  console.log(ending_index - max_len + 1, "to", ending_index);
  return max_len;
}

