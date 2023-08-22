function f_gold(arr) {
    arr.sort();
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] << 1) != arr[i - 1] + arr[i + 1]) {
            return false;
        }
    }
    return true;
}

