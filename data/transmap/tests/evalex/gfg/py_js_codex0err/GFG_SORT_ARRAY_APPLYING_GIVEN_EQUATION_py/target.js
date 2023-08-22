function f_gold(arr, n, A, B, C) {
  for (let i = 0; i < n; i++) arr[i] = (A * arr[i] * arr[i] + B * arr[i] + C);
  let index = -(Number.MAX_VALUE - 1);
  let maximum = -(Number.MAX_VALUE - 1);
  for (let i = 0; i < n; i++) {
    if (maximum < arr[i]) {
      index = i;
      maximum = arr[i];
    }
  }
  let i = 0;
  let j = n - 1;
  let new_arr = Array(n).fill(0);
  let k = 0;
  while (i < index && j > index) {
    if (arr[i] < arr[j]) {
      new_arr[k] = arr[i];
      k++;
      i++;
    }
    else {
      new_arr[k] = arr[j];
      k++;
      j--;
    }
  }
  while (i < index) {
    new_arr[k] = arr[i];
    k++;
    i++;
  }
  while (j > index) {
    new_arr[k] = arr[j];
    k++;
    j--;
  }
  new_arr[n - 1] = maximum;
  for (let i = 0; i < n; i++) arr[i] = new_arr[i];
}

