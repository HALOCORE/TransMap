function f_gold(arr) {
    var counter = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (counter.has(arr[i])) {
            counter.set(arr[i], counter.get(arr[i]) + 1);
        }
        else {
            counter.set(arr[i], 1);
        }
    }
    var s = new Set();
    for (var num of counter.values()) {
        if (s.has(num)) {
            return false;
        }
        s.add(num);
    }
    return true;
}

