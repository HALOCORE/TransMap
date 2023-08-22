function f_gold (licensePlate, words) {
    function count (word) {
        var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < word.length; i++) {
            counter[word.charCodeAt(i) - 97] += 1;
        }
        return counter;
    }
    function check (counter1, counter2) {
        for (var i = 0; i < 26; i++) {
            if (counter1[i] > counter2[i]) {
                return false;
            }
        }
        return true;
    }
    var counter = count(licensePlate.toLowerCase().replace(/[^a-z]/g, ''));
    var ans = null;
    var n = 16;
    for (var i = 0; i < words.length; i++) {
        if (n <= words[i].length) {
            continue;
        }
        var t = count(words[i]);
        if (check(counter, t)) {
            n = words[i].length;
            ans = words[i];
        }
    }
    return ans;
}

