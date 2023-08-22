function f_gold(stones) {
    var h = [-s for s in stones];
    heapify(h);
    while (len(h) > 1) {
        var y, x = -heappop(h), -heappop(h);
        if (x != y) {
            heappush(h, x - y);
        }
    }
    return 0 if (!h) else -h[0];
}

