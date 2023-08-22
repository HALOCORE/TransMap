function f_gold(arr, n) {
  let mp = {};
  let maxDict = 0;
  for (let i = 0; i < n; i++) {
    if (!(arr[i] in mp)) mp[arr[i]] = i;
    else maxDict = Math.max(maxDict, i - mp[arr[i]]);
  }
  return maxDict;
}

