function f_gold(s, t, n, k) {
  let last = 0;
  let cnt = 0;
  let new_last = 0;
  let size = 0;
  let string = 'zyxwvutsrqponmlkjihgfedcba';
  for (let ch of string) {
    cnt = 0;
    for (let i = last; i < n; i++) {
      if (s[i] == ch) cnt += 1;
    }
    if (cnt >= k) {
      for (let i = last; i < n; i++) {
        if (s[i] == ch) {
          t[size] = ch;
          new_last = i;
          size += 1;
        }
      }
      last = new_last;
    }
  }
}

