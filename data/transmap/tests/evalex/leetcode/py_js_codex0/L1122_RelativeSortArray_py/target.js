function f_gold(arr1, arr2) {
    var mp = Array(1001).fill(0);
    for (var x of arr1) {
        mp[x] += 1;
    }
    var i = 0;
    for (var x of arr2) {
        while (mp[x] > 0) {
            arr1[i] = x;
            mp[x] -= 1;
            i += 1;
        }
    }
    for (var x = 0; x < mp.length; x++) {
        for (var _ = 0; _ < mp[x]; _++) {
            arr1[i] = x;
            i += 1;
        }
    }
    return arr1;
}

