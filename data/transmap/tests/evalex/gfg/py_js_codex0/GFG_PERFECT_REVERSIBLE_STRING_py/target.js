function f_gold(str) {
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) return false;
        i += 1;
        j -= 1;
    }
    return true;
}

