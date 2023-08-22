function f_gold(nums) {
    let mapper = {};
    for (let i = 0; i < nums.length; i++) {
        let v = nums[i];
        if (v in mapper) {
            let arr = mapper[v];
            arr[0] += 1;
            arr[2] = i;
        }
        else {
            let arr = [1, i, i];
            mapper[v] = arr;
        }
    }
    let max_degree = 0;
    let min_len = 0;
    for (let arr of Object.values(mapper)) {
        if (max_degree < arr[0]) {
            max_degree = arr[0];
            min_len = arr[2] - arr[1] + 1;
        }
        else if (max_degree == arr[0]) {
            min_len = Math.min(min_len, arr[2] - arr[1] + 1);
        }
    }
    return min_len;
}

