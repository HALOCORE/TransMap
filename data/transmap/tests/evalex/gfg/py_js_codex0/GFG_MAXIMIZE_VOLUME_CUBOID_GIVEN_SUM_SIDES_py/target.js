function f_gold(s) {
  let maxvalue = 0;
  let i = 1;
  for (i = 1; i < s - 1; i++) {
    let j = 1;
    for (j = 1; j < s; j++) {
      let k = s - i - j;
      maxvalue = Math.max(maxvalue, i * j * k);
    }
  }
  return maxvalue;
}

