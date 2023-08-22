function f_gold(words) {
    var counter = {};
    for (var word of words) {
        for (var c of word) {
            if (counter[c] == undefined) {
                counter[c] = 1;
            }
            else {
                counter[c] += 1;
            }
        }
    }
    var n = words.length;
    for (var count of Object.values(counter)) {
        if (count % n != 0) {
            return false;
        }
    }
    return true;
}

