function f_gold(tree) {
    var counter = {};
    var i = 0;
    var res = 0;
    for (var j = 0; j < tree.length; j++) {
        if (counter[tree[j]] == undefined) {
            counter[tree[j]] = 1;
        }
        else {
            counter[tree[j]] += 1;
        }
        while (Object.keys(counter).length > 2) {
            counter[tree[i]] -= 1;
            if (counter[tree[i]] == 0) {
                delete counter[tree[i]];
            }
            i += 1;
        }
        res = Math.max(res, j - i + 1);
    }
    return res;
}

