
function f_gold(nums) {
    function check(a, b, c) {
        var s = a + b + c;
        return sum(s % x == 0 for x in [a, b, c]) == 1;
    }
    var counter = Counter(nums);
    var ans = 0;
    for (var a, cnt1 in counter.items()) {
        for (var b, cnt2 in counter.items()) {
            for (var c, cnt3 in counter.items()) {
                if (check(a, b, c)) {
                    if (a == b) {
                        ans += cnt1 * (cnt1 - 1) * cnt3;
                    }
                    else if (a == c) {
                        ans += cnt1 * (cnt1 - 1) * cnt2;
                    }
                    else if (b == c) {
                        ans += cnt1 * cnt2 * (cnt2 - 1);
                    }
                    else {
                        ans += cnt1 * cnt2 * cnt3;
                    }
                }
            }
        }
    }
    return ans;
}

