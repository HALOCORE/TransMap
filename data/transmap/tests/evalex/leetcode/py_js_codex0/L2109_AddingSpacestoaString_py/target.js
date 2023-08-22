function f_gold(s, spaces) {
    var ans = [];
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (j < spaces.length && i == spaces[j]) {
            ans.push(' ');
            j++;
        }
        ans.push(s[i]);
    }
    return ans.join('');
}

