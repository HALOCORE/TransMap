function f_gold(piles, k) {
    var h = [];
    for (var p of piles) {
        h.push(-p);
    }
    heapify(h);
    for (var _ of range(k)) {
        p = -heappop(h);
        heappush(h, -((p + 1) >> 1));
    }
    return -sum(h);
}

