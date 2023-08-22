function cache(f) { return f; }
function f_gold(s1, s2, s3) {
    var m = s1.length;
    var n = s2.length;
    if (m + n != s3.length) {
        return false;
    }
    function dfs(i, j) {
        if (i == m && j == n) {
            return true;
        }
        return (
            i < m
                && s1[i] == s3[i + j]
                && dfs(i + 1, j)
                || j < n
                && s2[j] == s3[i + j]
                && dfs(i, j + 1)
        );
    }
    return dfs(0, 0);
}

