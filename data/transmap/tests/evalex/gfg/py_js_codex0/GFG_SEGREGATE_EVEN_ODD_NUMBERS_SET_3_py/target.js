function f_gold(arr, n) {
  var i = - 1;
  var j = 0;
  while(j != n) {
    if(arr[j] % 2 == 0) {
      i = i + 1;
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    j = j + 1;
  }
  for(var i_1 = 0;i_1 < arr.length;i_1++) {
    console.log(arr[i_1] + " ", end = '');
  }
}

