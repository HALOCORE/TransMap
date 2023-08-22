
function f_gold(equations) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var p = list(range(26));
    for (var e in equations) {
        var a = ord(e[0]) - ord('a'), b = ord(e[-1]) - ord('a');
        if (e[1] == '=') {
            p[find(a)] = find(b);
        }
    }
    for (var e in equations) {
        var a = ord(e[0]) - ord('a'), b = ord(e[-1]) - ord('a');
        if (e[1] == '!' && find(a) == find(b)) {
            return false;
        }
    }
    return true;
}

