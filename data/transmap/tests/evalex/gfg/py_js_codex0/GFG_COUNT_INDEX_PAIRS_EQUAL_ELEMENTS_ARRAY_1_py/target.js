function f_gold(arr, n) {
  let mp = {};
  for (let i = 0; i < n; i++) {
    if (arr[i] in mp) mp[arr[i]] += 1;
    else mp[arr[i]] = 1;
  }
  let ans = 0;
  for (let it in mp) {
    let count = mp[it];
    ans += (count * (count - 1)) / 2;
  }
  return ans;
}

