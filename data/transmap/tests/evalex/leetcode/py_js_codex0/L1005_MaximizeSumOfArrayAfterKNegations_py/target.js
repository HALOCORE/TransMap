
function f_gold(nums, k) {
    var counter = new Map();
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        if (counter.has(nums[i])) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        }
        else {
            counter.set(nums[i], 1);
        }
        ans += nums[i];
    }
    for (var i = -100; i < 0; i++) {
        if (counter.has(i)) {
            var ops = Math.min(counter.get(i), k);
            ans -= i * ops * 2;
            counter.set(i, counter.get(i) - ops);
            counter.set(-i, counter.get(-i) + ops);
            k -= ops;
            if (k == 0) {
                break;
            }
        }
    }
    if (k > 0 && k % 2 == 1 && !counter.has(0)) {
        for (var i = 1; i < 101; i++) {
            if (counter.has(i)) {
                ans -= 2 * i;
                break;
            }
        }
    }
    return ans;
}

