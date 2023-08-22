
function f_gold(arr, n) {
  let difference = 0;
  let ans = 0;
  let hash_positive = Array(n + 1).fill(0);
  let hash_negative = Array(n + 1).fill(0);
  hash_positive[0] = 1;
  for (let i = 0; i < n; i++) {
    if ((arr[i] & 1) == 1) difference = difference + 1;
    else difference = difference - 1;
    if (difference < 0) {
      ans += hash_negative[-difference];
      hash_negative[-difference] = hash_negative[-difference] + 1;
    } else {
      ans += hash_positive[difference];
      hash_positive[difference] = hash_positive[difference] + 1;
    }
  }
  return ans;
}

