
function f_gold(num, target) {
    let ans = [];

    function dfs(u, prev, curr, path) {
        if (u == num.length) {
            if (curr == target) {
                ans.push(path);
            }
            return;
        }
        for (let i = u; i < num.length; i++) {
            if (i != u && num[u] == '0') {
                break;
            }
            let next = parseInt(num.substring(u, i + 1));
            if (u == 0) {
                dfs(i + 1, next, next, path + next);
            } else {
                dfs(i + 1, next, curr + next, path + "+" + next);
                dfs(i + 1, -next, curr - next, path + "-" + next);
                dfs(i + 1, prev * next, curr - prev + prev * next, path + "*" + next);
            }
        }
    }
    dfs(0, 0, 0, "");
    return ans;
}

