function f_gold(logs) {
    function cmp(x) {
        var a = x.split(' ', 1)[0];
        var b = x.split(' ', 1)[1];
        return (0, b, a) if (b[0].isalpha()) else (1,);
    }
    return sorted(logs, key=cmp);
}

