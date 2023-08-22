const findMedianSortedArrays = (nums1, nums2) => {
    const findKth = (i, j, k) => {
        if (i >= m) {
            return nums2[j + k - 1];
        }
        if (j >= n) {
            return nums1[i + k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[i], nums2[j]);
        }
        const midVal1 = nums1[i + Math.floor(k / 2) - 1] || Infinity;
        const midVal2 = nums2[j + Math.floor(k / 2) - 1] || Infinity;
        if (midVal1 < midVal2) {
            return findKth(i + Math.floor(k / 2), j, k - Math.floor(k / 2));
        }
        return findKth(i, j + Math.floor(k / 2), k - Math.floor(k / 2));
    };
    const m = nums1.length;
    const n = nums2.length;
    const left = Math.floor((m + n + 1) / 2);
    const right = Math.floor((m + n + 2) / 2);
    return (findKth(0, 0, left) + findKth(0, 0, right)) / 2;
};

