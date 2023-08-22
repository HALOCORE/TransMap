function f_gold(notes, n) {
  let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < n; i++) {
    if (notes[i] == 5) fiveCount += 1;
    else if (notes[i] == 10) {
      if (fiveCount > 0) {
        fiveCount -= 1;
        tenCount += 1;
      } else return 0;
    } else {
      if (fiveCount > 0 && tenCount > 0) {
        fiveCount -= 1;
        tenCount -= 1;
      } else if (fiveCount >= 3) fiveCount -= 3;
      else return 0;
    }
  }
  return 1;
}

