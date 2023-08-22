function f_gold(nums1, nums2) {
    var mapper = new Map();
    for (var i = 0; i < nums2.length; i++) {
        if (mapper.has(nums2[i])) {
            mapper.get(nums2[i]).push(i);
        }
        else {
            mapper.set(nums2[i], [i]);
        }
    }
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
        result.push(mapper.get(nums1[i]).pop());
    }
    return result;
}

