function f_gold(arr, n) {
  let s = new Set();
  let sum = 0;
  for (let i = 0; i < n; i++) sum += arr[i];
  if (sum % 2 != 0) return false;
  sum = sum / 2;
  for (let i = 0; i < n; i++) {
    let val = sum - arr[i];
    if (!s.has(arr[i])) s.add(arr[i]);
    if (s.has(val)) console.log("Pair elements are", arr[i], "and", parseInt(val));
  }
}

