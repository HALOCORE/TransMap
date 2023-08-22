function f_gold(process, need) {
  let minResources = 0;
  minResources = process * (need - 1) + 1;
  return minResources;
}

