
function f_gold ( words ) {
    function find ( x ) {
        if ( p[x] != x ) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    function union ( a, b ) {
        if ( b not in p ) {
            return;
        }
        pa, pb = find(a), find(b);
        if ( pa == pb ) {
            return;
        }
        p[pa] = pb;
        size[pb] += size[pa];
        mx = Math.max(mx, size[pb]);
        n -= 1;
    }
    p = {};
    size = Counter();
    n = words.length;
    mx = 0;
    for ( let word of words ) {
        let x = 0;
        for ( let c of word ) {
            x |= 1 << (ord(c) - ord('a'));
        }
        p[x] = x;
        size[x] += 1;
        mx = Math.max(mx, size[x]);
        if ( size[x] > 1 ) {
            n -= 1;
        }
    }
    for ( let x of p.keys() ) {
        for ( let i = 0; i < 26; i++ ) {
            union(x, x ^ (1 << i));
            if ( (x >> i) & 1 ) {
                for ( let j = 0; j < 26; j++ ) {
                    if ( ((x >> j) & 1) == 0 ) {
                        union(x, x ^ (1 << i) | (1 << j));
                    }
                }
            }
        }
    }
    return [n, mx];
}

