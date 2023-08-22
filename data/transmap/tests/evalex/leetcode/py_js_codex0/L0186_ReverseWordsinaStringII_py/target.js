function f_gold(s) {
    function reverse(s, i, j) {
        while (i < j) {
            var temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    }
    var i = 0;
    var j = 0;
    var n = s.length;
    while (j < n) {
        if (s[j] == ' ') {
            reverse(s, i, j - 1);
            i = j + 1;
        }
        else if (j == n - 1) {
            reverse(s, i, j);
        }
        j++;
    }
    reverse(s, 0, n - 1);
}

