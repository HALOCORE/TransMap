function f_gold(command) {
    var res = '';
    var i = 0;
    var n = command.length;
    while (i < n) {
        var c = command[i];
        if (c == 'G') {
            res += c;
            i += 1;
        }
        else if (c == '(' && command[i + 1] != ')') {
            res += 'al';
            i += 4;
        }
        else {
            res += 'o';
            i += 2;
        }
    }
    return res;
}

