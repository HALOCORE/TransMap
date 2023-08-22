function f_gold(arr) {
    var copy = arr.slice();
    var has_change = true;
    var n = arr.length;
    while (has_change) {
        has_change = false;
        for (var i = 1; i < n - 1; i++) {
            if (arr[i] < copy[i - 1] && arr[i] < copy[i + 1]) {
                arr[i] += 1;
                has_change = true;
            }
            else if (arr[i] > copy[i - 1] && arr[i] > copy[i + 1]) {
                arr[i] -= 1;
                has_change = true;
            }
        }
        copy = arr.slice();
    }
    return arr;
}

