function f_gold(n) {
  let answer = new Array(n + 1);
  answer[0] = 1;
  let i = 1;
  while (i <= n) {
    answer[i] = answer[i - 1] * 3 + 2;
    i = i + 1;
  }
  return answer[n];
}

