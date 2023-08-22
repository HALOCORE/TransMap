
function f_gold(jobs, k) {
    function dfs(i) {
        if (i == jobs.length) {
            ans = Math.min(ans, Math.max(...cnt));
            return;
        }
        for (let j = 0; j < k; j++) {
            if (cnt[j] + jobs[i] >= ans) continue;
            cnt[j] += jobs[i];
            dfs(i + 1);
            cnt[j] -= jobs[i];
            if (cnt[j] == 0) break;
        }
    }
    let cnt = new Array(k).fill(0);
    jobs.sort((a, b) => b - a);
    let ans = Number.MAX_SAFE_INTEGER;
    dfs(0);
    return ans;
}

