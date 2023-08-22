function f_gold(pages, n, capacity) {
  let s = new Set();
  let indexes = [];
  let page_faults = 0;
  for (let i = 0; i < n; i++) {
    if (s.size < capacity) {
      if (!s.has(pages[i])) {
        s.add(pages[i]);
        page_faults += 1;
        indexes.push(pages[i]);
      }
    } else {
      if (!s.has(pages[i])) {
        let val = indexes[0];
        indexes.shift();
        s.delete(val);
        s.add(pages[i]);
        indexes.push(pages[i]);
        page_faults += 1;
      }
    }
  }
  return page_faults;
}

