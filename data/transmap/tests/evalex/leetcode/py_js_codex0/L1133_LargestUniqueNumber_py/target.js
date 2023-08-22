function f_gold(A) {
    var counter = new Map();
    for (var i = 0; i < A.length; i++) {
        if (counter.has(A[i])) {
            counter.set(A[i], counter.get(A[i]) + 1);
        }
        else {
            counter.set(A[i], 1);
        }
    }
    for (var i = 1000; i >= 0; i--) {
        if (counter.get(i) == 1) {
            return i;
        }
    }
    return -1;
}

