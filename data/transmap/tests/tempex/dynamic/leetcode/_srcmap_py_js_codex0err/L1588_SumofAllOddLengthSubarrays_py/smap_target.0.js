function f_gold(arr) {
    let n = arr.length;
    let presum = new Array(n + 1);
    for (let i = 0; i < n; i++) {
        presum[i + 1] = presum[i] + arr[i];
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j += 2) {
            if (i + j < n) {
                res += presum[i + j + 1] - presum[i];
            }
        }
    }
    return res;
}

