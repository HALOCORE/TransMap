function f_gold(nums, k) {
    var n = nums.length;
    k %= n;
    if (n < 2 || k == 0) {
        return;
    }
    nums.splice(0, nums.length, ...nums.reverse());
    nums.splice(0, k, ...nums.slice(0, k).reverse());
    nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
}

