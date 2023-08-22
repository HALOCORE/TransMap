
function f_gold(nums) {
    let n = nums.length;
    let lmx = Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        lmx[i] = Math.max(lmx[i - 1], nums[i - 1]);
    }
    let rmi = Array(n).fill(100001);
    for (let i = n - 2; i >= 0; i--) {
        rmi[i] = Math.min(rmi[i + 1], nums[i + 1]);
    }
    let ans = 0;
    for (let i = 1; i < n - 1; i++) {
        if (lmx[i] < nums[i] && nums[i] < rmi[i]) {
            ans += 2;
        }
        else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
            ans += 1;
        }
    }
    return ans;
}

