function f_gold(arr) {
    var m = {};
    for (var i = 0; i < arr.length; i++) {
        m[arr[i]] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        if (m[arr[i] << 1] != undefined && m[arr[i] << 1] != i) {
            return true;
        }
    }
    return false;
}

