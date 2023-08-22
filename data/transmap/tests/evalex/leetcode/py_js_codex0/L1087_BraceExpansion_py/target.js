
function f_gold(s) {
    function convert(s) {
        if (!s) return;
        if (s[0] == '{') {
            var j = s.indexOf('}');
            items.push(s.substring(1, j).split(','));
            convert(s.substring(j + 1));
        } else {
            var j = s.indexOf('{');
            if (j != -1) {
                items.push(s.substring(0, j).split(','));
                convert(s.substring(j));
            } else {
                items.push(s.split(','));
            }
        }
    }
    function dfs(i, t) {
        if (i == items.length) {
            ans.push(t.join(''));
            return;
        }
        for (var c of items[i]) {
            t.push(c);
            dfs(i + 1, t);
            t.pop();
        }
    }
    var items = [];
    convert(s);
    var ans = [];
    dfs(0, []);
    ans.sort();
    return ans;
}

