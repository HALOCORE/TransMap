function order_by_points(nums) {
    function digits_sum(n) {
        let neg = 1;
        if (n < 0) {
            n = -1 * n;
            neg = -1;
        }
        n = n.toString().split("").map(Number);
        n[0] = n[0] * neg;
        return n.reduce((a, b) => a + b);
    }
    return nums.sort((a, b) => digits_sum(a) - digits_sum(b));
}

