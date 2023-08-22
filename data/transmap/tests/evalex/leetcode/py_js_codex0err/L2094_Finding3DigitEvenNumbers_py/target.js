function f_gold(digits) {
    var ans = [];
    var counter = Counter(digits);
    for (var i = 100; i < 1000; i += 2) {
        var t = [];
        var k = i;
        while (k) {
            t.push(k % 10);
            k = Math.floor(k / 10);
        }
        var cnt = Counter(t);
        if (all([counter[i] >= cnt[i] for (var i = 0; i < 10; i++)]) {
            ans.push(i);
        }
    }
    return ans;
}

