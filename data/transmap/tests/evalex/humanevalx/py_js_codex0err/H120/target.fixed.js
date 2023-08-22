function maximum(arr, k) {
    if (k === 0) {
        return [];
    }
    arr.sort((a, b) => a-b);
    let ans = arr.slice(-k);
    return ans;
}

