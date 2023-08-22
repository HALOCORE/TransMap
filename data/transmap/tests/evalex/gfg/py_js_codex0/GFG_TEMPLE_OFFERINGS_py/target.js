function f_gold(n, templeHeight) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (templeHeight[j] < templeHeight[j + 1]) left += 1;
      else break;
    }
    for (let j = i + 1; j < n; j++) {
      if (templeHeight[j] < templeHeight[j - 1]) right += 1;
      else break;
    }
    sum += Math.max(right, left) + 1;
  }
  return sum;
}

