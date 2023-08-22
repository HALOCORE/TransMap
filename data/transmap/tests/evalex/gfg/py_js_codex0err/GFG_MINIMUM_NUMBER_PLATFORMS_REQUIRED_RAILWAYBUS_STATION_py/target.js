function f_gold(arr, dep, n) {
  arr.sort();
  dep.sort();
  var plat_needed = 1;
  var result = 1;
  var i = 1;
  var j = 0;
  while(i < n && j < n) {
    if(arr[i] < dep[j]) {
      plat_needed += 1;
      i += 1;
      if(plat_needed > result) result = plat_needed;
    }
    else {
      plat_needed -= 1;
      j += 1;
    }
  }
  return result;
}

