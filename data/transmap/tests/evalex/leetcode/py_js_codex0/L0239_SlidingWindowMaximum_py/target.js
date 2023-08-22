
function f_gold(nums, k) {
    let q = [];
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (q.length > 0 && i - k + 1 > q[0]) {
            q.shift();
        }
        while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        if (i >= k - 1) {
            ans.push(nums[q[0]]);
        }
    }
    return ans;
}

