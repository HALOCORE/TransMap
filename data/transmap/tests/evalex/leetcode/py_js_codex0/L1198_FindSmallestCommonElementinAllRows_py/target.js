function f_gold(mat) {
    var counter = {};
    for (var row of mat) {
        for (var num of row) {
            if (counter[num] == undefined) {
                counter[num] = 1;
            }
            else {
                counter[num] += 1;
            }
            if (counter[num] == mat.length) {
                return num;
            }
        }
    }
    return -1;
}

