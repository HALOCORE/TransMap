function f_gold(coin, n, k) {
  coin.sort();
  var coins_needed = Math.ceil(1.0 * n / (k + 1));
  var ans = 0;
  for (var i = 0; i < coins_needed; i++) ans += coin[i];
  return ans;
}

