function f_gold(version1, version2) {
    var i = 0;
    var j = 0;
    var m = version1.length;
    var n = version2.length;
    while (i < m || j < n) {
        var a = 0;
        var b = 0;
        while (i < m && version1[i] != '.') {
            a = a * 10 + parseInt(version1[i]);
            i += 1;
        }
        while (j < n && version2[j] != '.') {
            b = b * 10 + parseInt(version2[j]);
            j += 1;
        }
        if (a != b) {
            return (a < b) ? -1 : 1;
        }
        i += 1;
        j += 1;
    }
    return 0;
}

