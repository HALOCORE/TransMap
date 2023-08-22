function f_gold(words, k) {
    var counter = {};
    for (var i = 0; i < words.length; i++) {
        if (counter[words[i]]) {
            counter[words[i]] += 1;
        } else {
            counter[words[i]] = 1;
        }
    }
    var res = Object.keys(counter).sort(function (a, b) {
        if (counter[a] > counter[b]) {
            return -1;
        } else if (counter[a] < counter[b]) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    return res.slice(0, k);
}

