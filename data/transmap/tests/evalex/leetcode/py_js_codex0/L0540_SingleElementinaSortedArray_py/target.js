const singleNonDuplicate = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] != nums[mid ^ 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
};

