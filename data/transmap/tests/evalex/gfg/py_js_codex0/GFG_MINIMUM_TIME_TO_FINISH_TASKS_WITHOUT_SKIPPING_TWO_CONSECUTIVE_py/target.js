function f_gold(arr, n) {
  if(n <= 0) return 0;
  let incl = arr[0];
  let excl = 0;
  for(let i = 1; i < n; i++) {
    let incl_new = arr[i] + Math.min(excl, incl);
    let excl_new = incl;
    incl = incl_new;
    excl = excl_new;
  }
  return Math.min(incl, excl);
}

