
function f_gold(arr, arr_size) {
  if (arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  let first = arr[0];
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] > first) first = arr[i];
  }
  let second = -Number.MAX_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > second && arr[i] < first) second = arr[i];
  }
  let third = -Number.MAX_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > third && arr[i] < second) third = arr[i];
  }
  console.log("The Third Largest", "element is", third);
}

