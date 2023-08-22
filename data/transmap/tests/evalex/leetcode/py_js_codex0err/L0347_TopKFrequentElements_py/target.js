function f_gold(nums, k) {
    var counter = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (counter.has(nums[i])) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        }
        else {
            counter.set(nums[i], 1);
        }
    }
    var hp = [];
    for (var [num, freq] of counter) {
        if (hp.length == k) {
            hp.push([freq, num]);
            hp.sort(function (a, b) { return a[0] - b[0]; });
            hp.pop();
        }
        else {
            hp.push([freq, num]);
            hp.sort(function (a, b) { return a[0] - b[0]; });
        }
    }
    var result = [];
    for (var i = 0; i < hp.length; i++) {
        result.push(hp[i][1]);
    }
    return result;
}

