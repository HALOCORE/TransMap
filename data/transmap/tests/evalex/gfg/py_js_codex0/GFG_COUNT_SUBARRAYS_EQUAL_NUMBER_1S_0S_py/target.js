function f_gold(arr, n) {
  var um = {};
  var curr_sum = 0;
  for (var i = 0; i < n; i++) {
    curr_sum += (-1 if (arr[i] == 0) else arr[i]);
    if (um.get(curr_sum)) um[curr_sum] += 1;
    else um[curr_sum] = 1;
  }
  var count = 0;
  for (var itr in um) {
    if (um[itr] > 1) count += ((um[itr] * int(um[itr] - 1)) / 2);
  }
  if (um.get(0)) count += um[0];
  return int(count);
}


