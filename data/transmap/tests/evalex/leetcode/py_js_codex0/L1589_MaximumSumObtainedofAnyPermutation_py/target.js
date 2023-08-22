function f_gold(nums, requests) {
    let n = 100010;
    let delta = Array(n).fill(0);
    for (let i = 0; i < requests.length; i++) {
        let start = requests[i][0];
        let end = requests[i][1];
        delta[start] += 1;
        delta[end + 1] -= 1;
    }
    for (let i = 1; i < n; i++) {
        delta[i] += delta[i - 1];
    }
    nums.sort(function (a, b) { return a - b; });
    delta.sort(function (a, b) { return a - b; });
    let i = n - 1;
    let j = nums.length - 1;
    let res = 0;
    while (i > 0 && delta[i] > 0) {
        res += delta[i] * nums[j];
        i -= 1;
        j -= 1;
    }
    return res % 1000000007;
}

