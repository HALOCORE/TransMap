
function f_gold ( n, edges ) {
    if ( n == 1 ) return [0];
    let g = new Map();
    let degree = new Array(n).fill(0);
    for ( let i = 0; i < edges.length; i++ ) {
        let a = edges[i][0];
        let b = edges[i][1];
        if ( g.has(a) ) {
            g.get(a).push(b);
        } else {
            g.set(a, [b]);
        }
        if ( g.has(b) ) {
            g.get(b).push(a);
        } else {
            g.set(b, [a]);
        }
        degree[a] += 1;
        degree[b] += 1;
    }
    let q = [];
    for ( let i = 0; i < n; i++ ) {
        if ( degree[i] == 1 ) {
            q.push(i);
        }
    }
    let ans = [];
    while ( q.length > 0 ) {
        let n = q.length;
        ans.length = 0;
        for ( let i = 0; i < n; i++ ) {
            let a = q.shift();
            ans.push(a);
            for ( let j = 0; j < g.get(a).length; j++ ) {
                let b = g.get(a)[j];
                degree[b] -= 1;
                if ( degree[b] == 1 ) {
                    q.push(b);
                }
            }
        }
    }
    return ans;
}

