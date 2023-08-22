function canArrange(arr) {
    let ind = -1;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < arr[i - 1]) {
            ind = i;
        }
        i += 1;
    }
    return ind;
}

