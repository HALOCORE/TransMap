function f_gold(s) {
    var vowels = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    var i = 0;
    var j = s.length - 1;
    var chars = s.split("");
    while (i < j) {
        if (!(chars[i] in vowels)) {
            i++;
            continue;
        }
        if (!(chars[j] in vowels)) {
            j--;
            continue;
        }
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        i++;
        j--;
    }
    return chars.join("");
}

