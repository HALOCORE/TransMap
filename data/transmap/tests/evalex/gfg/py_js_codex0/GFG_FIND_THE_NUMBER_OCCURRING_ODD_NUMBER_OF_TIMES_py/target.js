function f_gold(arr, arr_size) {
  for (let i = 0; i < arr_size; i++) {
    let count = 0;
    for (let j = 0; j < arr_size; j++) {
      if (arr[i] == arr[j]) count += 1;
    }
    if (count % 2 != 0) return arr[i];
  }
  return -1;
}

