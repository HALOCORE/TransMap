
function f_gold ( nums, edges ) {
    function dfs ( i, fa, x ) {
        let res = nums[i];
        for ( let j of g[i] ) {
            if ( j != fa && j != x ) {
                res ^= dfs(j, i, x);
            }
        }
        return res;
    }
    function dfs2 ( i, fa, x ) {
        let res = nums[i];
        for ( let j of g[i] ) {
            if ( j != fa && j != x ) {
                let a = dfs2(j, i, x);
                res ^= a;
                let b = s1 ^ a;
                let c = s ^ s1;
                let t = Math.max(a, b, c) - Math.min(a, b, c);
                ans = Math.min(ans, t);
            }
        }
        return res;
    }
    let g = new Map();
    for ( let a of edges ) {
        for ( let b of edges ) {
            if ( !g.has(a) ) {
                g.set(a, []);
            }
            g.get(a).push(b);
            if ( !g.has(b) ) {
                g.set(b, []);
            }
            g.get(b).push(a);
        }
    }
    let s = 0;
    for ( let v of nums ) {
        s ^= v;
    }
    let n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    for ( let i = 0; i < n; i++ ) {
        for ( let j of g.get(i) ) {
            let s1 = dfs(i, -1, j);
            dfs2(i, -1, j);
        }
    }
    return ans;
}

