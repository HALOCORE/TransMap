function f_gold(A, n) {
  let cnt = 0;
  let parent = Array(n + 1);
  let vis = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    parent[i] = -1;
    vis[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    let j = i;
    if (parent[j] == -1) {
      while (parent[j] == -1) {
        parent[j] = i;
        j = ((j + A[j] + 1) % n + n) % n;
      }
      if (parent[j] == i) {
        while (vis[j] == 0) {
          vis[j] = 1;
          cnt = cnt + 1;
          j = ((j + A[j] + 1) % n + n) % n;
        }
      }
    }
  }
  return cnt;
}

