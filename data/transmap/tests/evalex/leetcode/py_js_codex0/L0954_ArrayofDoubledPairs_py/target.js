function f_gold(arr) {
    var freq = {};
    for (var i = 0; i < arr.length; i++) {
        if (freq[arr[i]] == undefined) {
            freq[arr[i]] = 1;
        }
        else {
            freq[arr[i]]++;
        }
    }
    if (freq[0] & 1) {
        return false;
    }
    for (var x in freq) {
        if (freq[x << 1] < freq[x]) {
            return false;
        }
        freq[x << 1] -= freq[x];
    }
    return true;
}

