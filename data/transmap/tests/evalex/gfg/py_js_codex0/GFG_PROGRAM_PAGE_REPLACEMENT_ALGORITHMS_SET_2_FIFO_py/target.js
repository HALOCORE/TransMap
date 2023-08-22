function f_gold(pages, n, capacity) {
  let s = new Set();
  let indexes = new Queue();
  let page_faults = 0;
  for (let i = 0; i < n; i++) {
    if (s.size < capacity) {
      if (!s.has(pages[i])) {
        s.add(pages[i]);
        page_faults += 1;
        indexes.put(pages[i]);
      }
    } else {
      if (!s.has(pages[i])) {
        let val = indexes.queue[0];
        indexes.get();
        s.delete(val);
        s.add(pages[i]);
        indexes.put(pages[i]);
        page_faults += 1;
      }
    }
  }
  return page_faults;
}

