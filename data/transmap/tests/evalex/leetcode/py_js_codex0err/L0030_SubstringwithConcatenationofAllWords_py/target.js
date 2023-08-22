
function f_gold ( s, words ) {
    let cnt = Counter(words);
    let sublen = len(words[0]);
    let n = len(s);
    let m = len(words);
    let ans = [];
    for ( let i = 0; i < sublen; i++ ) {
        let cnt1 = Counter();
        let l = r = i;
        let t = 0;
        while ( r + sublen <= n ) {
            let w = s.substring(r, r + sublen);
            r += sublen;
            if ( !cnt.has(w) ) {
                l = r;
                cnt1.clear();
                t = 0;
                continue;
            }
            cnt1[w] += 1;
            t += 1;
            while ( cnt1[w] > cnt[w] ) {
                let remove = s.substring(l, l + sublen);
                l += sublen;
                cnt1[remove] -= 1;
                t -= 1;
            }
            if ( m == t ) {
                ans.push(l);
            }
        }
    }
    return ans;
}

