function f_gold(arr, n, k) {
  var um, curr_rem, maxSum = { }, 0, 0;
  var sm = Array(n);
  sm[0] = arr[0];
  for (var i = 1; i < n; i++) sm[i] = sm[i - 1] + arr[i];
  for (var i = 0; i < n; i++) {
    curr_rem = sm[i] % k;
    if (!curr_rem && maxSum < sm[i]) maxSum = sm[i];
    else if (!curr_rem in um) um[curr_rem] = i;
    else if (maxSum < (sm[i] - sm[um[curr_rem]])) maxSum = sm[i] - sm[um[curr_rem]];
  }
  return maxSum / k;
}

