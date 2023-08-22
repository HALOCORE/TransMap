function f_gold(arr, n) {
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < n; i++) {
    if ((i % 2) == 0) evenArr.push(arr[i]);
    else oddArr.push(arr[i]);
  }
  evenArr.sort((a, b) => a-b);
  oddArr.sort((a, b) => a-b);
  oddArr = oddArr.reverse();
  let i = 0;
  for (let j = 0; j < evenArr.length; j++) {
    arr[i] = evenArr[j];
    i++;
  }
  for (let j = 0; j < oddArr.length; j++) {
    arr[i] = oddArr[j];
    i++;
  }
}

