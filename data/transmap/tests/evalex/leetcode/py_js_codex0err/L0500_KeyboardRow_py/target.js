function f_gold(words) {
    var s1 = new Set('qwertyuiop');
    var s2 = new Set('asdfghjkl');
    var s3 = new Set('zxcvbnm');
    var res = [];
    for (var word of words) {
        var t = new Set(word.toLowerCase());
        if (t <= s1 || t <= s2 || t <= s3) {
            res.push(word);
        }
    }
    return res;
}

