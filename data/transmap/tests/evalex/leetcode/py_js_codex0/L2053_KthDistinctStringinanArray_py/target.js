function f_gold(arr, k) {
    var counter = {};
    for (var i = 0; i < arr.length; i++) {
        if (counter[arr[i]] == undefined) {
            counter[arr[i]] = 1;
        } else {
            counter[arr[i]] += 1;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (counter[arr[i]] == 1) {
            k -= 1;
            if (k == 0) {
                return arr[i];
            }
        }
    }
    return '';
}

