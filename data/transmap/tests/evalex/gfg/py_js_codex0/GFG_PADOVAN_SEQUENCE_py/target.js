function f_gold(n) {
  let pPrevPrev = 1;
  let pPrev = 1;
  let pCurr = 1;
  let pNext = 1;
  for (let i = 3; i <= n; i++) {
    pNext = pPrevPrev + pPrev;
    pPrevPrev = pPrev;
    pPrev = pCurr;
    pCurr = pNext;
  }
  return pNext;
}

