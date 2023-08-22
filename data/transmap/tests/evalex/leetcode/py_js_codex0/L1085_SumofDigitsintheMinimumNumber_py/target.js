function f_gold(nums) {
    var x = Math.min(...nums);
    var s = 0;
    while (x) {
        s += x % 10;
        x = Math.floor(x / 10);
    }
    return 0 if s % 2 else 1;
}

