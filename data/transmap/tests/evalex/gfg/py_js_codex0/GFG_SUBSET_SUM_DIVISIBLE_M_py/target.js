function f_gold(arr, n, m) {
  if(n > m) return true;
  let DP = Array(m).fill(false);
  for(let i = 0;i < n;i++) {
    if(DP[0]) return true;
    let temp = Array(m).fill(false);
    for(let j = 0;j < m;j++) {
      if(DP[j] == true) {
        if(DP[(j + arr[i]) % m] == false) temp[(j + arr[i]) % m] = true;
      }
    }
    for(let j = 0;j < m;j++) {
      if(temp[j]) DP[j] = true;
    }
    DP[arr[i] % m] = true;
  }
  return DP[0];
}

