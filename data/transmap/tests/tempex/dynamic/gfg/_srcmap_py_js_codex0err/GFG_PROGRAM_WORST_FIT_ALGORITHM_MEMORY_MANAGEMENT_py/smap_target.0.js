function f_gold(blockSize, m, processSize, n) {
  let allocation = Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    let wstIdx = -1;
    for (let j = 0; j < m; j++) {
      if (blockSize[j] >= processSize[i]) {
        if (wstIdx == -1) wstIdx = j;
        else if (blockSize[wstIdx] < blockSize[j]) wstIdx = j;
      }
    }
    if (wstIdx != -1) {
      allocation[i] = wstIdx;
      blockSize[wstIdx] -= processSize[i];
    }
  }
  console.log("Process No.Process Size Block no.");
  for (let i = 0; i < n; i++) {
    console.log(i + 1, "         ", processSize[i], end = "     ");
    if (allocation[i] != -1) console.log(allocation[i] + 1);
    else console.log("Not Allocated");
  }
}

