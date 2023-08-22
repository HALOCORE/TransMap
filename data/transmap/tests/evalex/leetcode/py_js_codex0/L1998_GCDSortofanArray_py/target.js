
const f_gold = (nums) => {
  let n = 100010;
  let p = Array.from(Array(n).keys());
  let f = new Map();
  let mx = Math.max(...nums);
  for (let i = 2; i <= mx; i++) {
    if (f.has(i)) continue;
    for (let j = i; j <= mx; j += i) {
      if (!f.has(j)) f.set(j, []);
      f.get(j).push(i);
    }
  }
  const find = (x) => {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
  };
  for (let i of nums) {
    for (let j of f.get(i)) {
      p[find(i)] = find(j);
    }
  }
  let s = nums.slice().sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (s[i] != nums[i] && find(nums[i]) != find(s[i])) return false;
  }
  return true;
};

### Python

### gcdSort 
import math
from math import gcd
from collections import defaultdict
from typing import *
def f_gold(nums: List[int]) -> bool:
    n = 10**5 + 10
    p = list(range(n))
    f = defaultdict(list)
    mx = max(nums)
    for i in range(2, mx + 1):
        if f[i]:
            continue
        for j in range(i, mx + 1, i):
            f[j].append(i)
    def find(x):
        if p[x] != x:
            p[x] = find(p[x])
        return p[x]
    for i in nums:
        for j in f[i]:
            p[find(i)] = find(j