function f_gold(s) {
    s = s.split("");
    for (var i = 1; i < s.length; i += 2) {
        s[i] = String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i]));
    }
    return s.join("");
}

