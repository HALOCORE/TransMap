const f_gold = (arr, n) => {
  let mp = {};
  let Sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) arr[i] = -1;
    Sum += arr[i];
    if (Sum == 0) count += 1;
    if (Sum in mp) count += mp[Sum];
    mp[Sum] = mp.get(Sum, 0) + 1;
  }
  return count;
};


