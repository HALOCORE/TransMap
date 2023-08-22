function f_gold(nums, original) {
    var s = new Set(nums);
    while (s.has(original)) {
        original <<= 1;
    }
    return original;
}

