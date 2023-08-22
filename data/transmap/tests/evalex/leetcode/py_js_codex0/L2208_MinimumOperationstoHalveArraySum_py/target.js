function f_gold(nums) {
    var s = sum(nums) / 2;
    var h = [];
    for (var v of nums) {
        heappush(h, -v);
    }
    var ans = 0;
    while (s > 0) {
        var t = -heappop(h) / 2;
        s -= t;
        heappush(h, -t);
        ans += 1;
    }
    return ans;
}

