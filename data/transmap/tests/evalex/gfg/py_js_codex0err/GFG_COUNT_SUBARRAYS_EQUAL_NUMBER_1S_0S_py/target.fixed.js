function f_gold(arr, n) {
  var um = {};
  var curr_sum = 0;
  for (var i = 0; i < n; i++) {
    curr_sum += (arr[i] == 0)? -1 : arr[i];
    if (typeof(um[curr_sum]) !== "undefined") um[curr_sum] += 1;
    else um[curr_sum] = 1;
  }
  var count = 0;
  for (var itr of Object.keys(um).map(Number)) {
    if (um[itr] > 1) count += ((um[itr] * parseInt(um[itr] - 1)) / 2);
  }
  if (typeof(um[0]) !== "undefined") count += um[0];
  return parseInt(count);
}


