function f_gold(arr) {
    var s = new Set();
    var prev = 0;
    for (var i = 0; i < arr.length; i++) {
        prev |= arr[i];
        var curr = 0;
        for (var j = i; j >= 0; j--) {
            curr |= arr[j];
            s.add(curr);
            if (curr == prev) {
                break;
            }
        }
    }
    return s.size;
}

