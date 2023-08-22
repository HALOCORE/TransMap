
function cache(f) {
    return f;
}

function f_gold(maxChoosableInteger, desiredTotal) {
    function dfs(state, t) {
        for (let i = 1; i <= maxChoosableInteger; i++) {
            if ((state >> i) & 1) {
                continue;
            }
            if (t + i >= desiredTotal || !dfs(state | 1 << i, t + i)) {
                return true;
            }
        }
        return false;
    }
    let s = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
    if (s < desiredTotal) {
        return false;
    }
    return dfs(0, 0);
}

