function f_gold(s) {
    s = s.split("");
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        while (i < j && !s[i].match(/[a-z]/i)) {
            i++;
        }
        while (i < j && !s[j].match(/[a-z]/i)) {
            j--;
        }
        if (i < j) {
            var temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    }
    return s.join("");
}

