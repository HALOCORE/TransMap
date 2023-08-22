function f_gold(arr, arr_size) {
  if(arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  var first = arr[0];
  var second = - Number.MAX_VALUE;
  var third = - Number.MAX_VALUE;
  for(var i = 1;i < arr_size;i++) {
    if(arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    }
    else if(arr[i] > second) {
      third = second;
      second = arr[i];
    }
    else if(arr[i] > third) third = arr[i];
  }
  console.log("The third Largest", "element is", third);
}

