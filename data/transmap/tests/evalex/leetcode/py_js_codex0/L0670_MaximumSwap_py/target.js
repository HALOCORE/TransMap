function f_gold(num) {
    var chars = Array.from(String(num));
    var n = chars.length;
    for (var i = 0; i < n - 1; i++) {
        var mx = i + 1;
        for (var j = i + 1; j < n; j++) {
            if (chars[j].charCodeAt(0) >= chars[mx].charCodeAt(0)) {
                mx = j;
            }
        }
        if (chars[i].charCodeAt(0) < chars[mx].charCodeAt(0)) {
            var temp = chars[i];
            chars[i] = chars[mx];
            chars[mx] = temp;
            break;
        }
    }
    return parseInt(chars.join(''));
}

