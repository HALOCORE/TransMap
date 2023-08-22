function f_gold(words) {
    var n = words.length;
    var mask = Array(n).fill(0);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < words[i].length; j++) {
            mask[i] |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
        }
    }
    var ans = 0;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if ((mask[i] & mask[j]) == 0) {
                ans = Math.max(ans, words[i].length * words[j].length);
            }
        }
    }
    return ans;
}

