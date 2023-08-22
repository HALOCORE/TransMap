function f_gold(nums) {
    let cnt = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (cnt.has(nums[i])) {
            cnt.set(nums[i], cnt.get(nums[i]) + 1);
        } else {
            cnt.set(nums[i], 1);
        }
    }
    let cnt_arr = Array.from(cnt.entries());
    cnt_arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });
    let ans = [];
    for (let i = 0; i < cnt_arr.length; i++) {
        for (let j = 0; j < cnt_arr[i][1]; j++) {
            ans.push(cnt_arr[i][0]);
        }
    }
    return ans;
}

