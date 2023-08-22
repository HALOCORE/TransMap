
function cache(f) {
    return f;
}

function f_gold(questions) {
    function dfs(i) {
        if (i >= questions.length) {
            return 0;
        }
        return Math.max(questions[i][0] + dfs(i + questions[i][1] + 1), dfs(i + 1));
    }
    return dfs(0);
}

