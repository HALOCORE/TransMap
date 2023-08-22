function f_gold(nums1, nums2, nums3, nums4) {
    let counter = {};
    for (let a of nums1) {
        for (let b of nums2) {
            if (counter[a + b] === undefined) {
                counter[a + b] = 1;
            } else {
                counter[a + b] += 1;
            }
        }
    }
    let ans = 0;
    for (let c of nums3) {
        for (let d of nums4) {
            if (counter[-(c + d)] !== undefined) {
                ans += counter[-(c + d)];
            }
        }
    }
    return ans;
}

