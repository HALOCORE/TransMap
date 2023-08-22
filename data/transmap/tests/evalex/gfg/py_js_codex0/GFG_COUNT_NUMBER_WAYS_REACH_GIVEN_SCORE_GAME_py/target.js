const f_gold = (n) => {
  let table = Array(n + 1).fill(0);
  table[0] = 1;
  for (let i = 3; i <= n; i++) table[i] += table[i - 3];
  for (let i = 5; i <= n; i++) table[i] += table[i - 5];
  for (let i = 10; i <= n; i++) table[i] += table[i - 10];
  return table[n];
};

