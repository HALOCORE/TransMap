function f_gold(deliciousness) {
    var mod = 1000000007;
    var limit = Math.max.apply(null, deliciousness) * 2;
    var pairs = 0;
    var freq = {};
    for (var i = 0; i < deliciousness.length; i++) {
        var d = deliciousness[i];
        var target = 1;
        while (target <= limit) {
            pairs = (pairs + (freq[target - d] || 0)) % mod;
            target = target << 1;
        }
        freq[d] = (freq[d] || 0) + 1;
    }
    return pairs;
}

