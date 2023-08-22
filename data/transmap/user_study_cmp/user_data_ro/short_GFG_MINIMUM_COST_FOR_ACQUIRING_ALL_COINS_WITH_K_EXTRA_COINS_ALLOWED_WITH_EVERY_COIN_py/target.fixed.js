function f_gold(coin, n, k) {
  coin.sort((a, b) => a-b);
  var coins_needed = Math.floor(1.0 * n / (k + 1));
  var ans = 0;
  for (var i = 0; i < coins_needed; i++) ans += coin[i];
  return ans;
}

