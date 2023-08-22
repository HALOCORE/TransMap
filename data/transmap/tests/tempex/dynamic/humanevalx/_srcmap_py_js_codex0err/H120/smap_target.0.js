function maximum(arr, k) {
    if (k === 0) {
        return [];
    }
    arr.sort();
    let ans = arr.slice(-k);
    return ans;
}

