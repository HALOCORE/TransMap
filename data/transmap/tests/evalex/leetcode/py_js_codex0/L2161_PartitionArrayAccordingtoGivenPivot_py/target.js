function f_gold(nums, pivot) {
    var a = [], b = [], c = [];
    for (var x of nums) {
        if (x < pivot) {
            a.push(x);
        }
        else if (x == pivot) {
            b.push(x);
        }
        else {
            c.push(x);
        }
    }
    return a.concat(b).concat(c);
}

