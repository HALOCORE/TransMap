function f_gold(blockSize, m, processSize, n) {
  var allocation = Array(n).fill(-1);
  for (var i = 0; i < n; i++) {
    var bestIdx = -1;
    for (var j = 0; j < m; j++) {
      if (blockSize[j] >= processSize[i]) {
        if (bestIdx == -1) bestIdx = j;
        else if (blockSize[bestIdx] > blockSize[j]) bestIdx = j;
      }
    }
    if (bestIdx != -1) {
      allocation[i] = bestIdx;
      blockSize[bestIdx] -= processSize[i];
    }
  }
  console.log("Process No.Process Size     Block no.");
  for (var i = 0; i < n; i++) {
    console.log(i + 1, "         ", processSize[i], end = "         ");
    if (allocation[i] != -1) console.log(allocation[i] + 1);
    else console.log("Not Allocated");
  }
}

