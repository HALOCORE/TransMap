function f_gold(arr, k) {
    var mod = Array(k).fill(0);
    for (var v of arr) {
        mod[v % k] += 1;
    }
    return mod.slice(1).every(function (x, i) { return x == mod[k - i - 1]; }) && mod[0] % 2 == 0;
}

