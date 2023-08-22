var cache = function (f) { return f; };
var f_gold = function (numCourses, prerequisites, queries) {
    var dfs = cache(function (a, b) {
        if (b in g[a] || a == b) {
            return true;
        }
        for (var c in g[a]) {
            if (dfs(c, b)) {
                return true;
            }
        }
        return false;
    });
    var g = {};
    for (var a = 0; a < prerequisites.length; a++) {
        for (var b = 0; b < prerequisites[a].length; b++) {
            g[a].add(b);
        }
    }
    return [dfs(a, b) for (a, b) in queries];
};

