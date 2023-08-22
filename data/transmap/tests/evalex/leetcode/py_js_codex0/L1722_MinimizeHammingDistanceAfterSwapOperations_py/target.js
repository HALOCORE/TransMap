
function f_gold ( source, target, allowedSwaps ) {
    var n = source.length;
    var p = [];
    for ( var i = 0; i < n; i++ ) {
        p.push(i);
    }
    function find ( x ) {
        if ( p[x] != x ) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for ( var i = 0; i < allowedSwaps.length; i++ ) {
        p[find(allowedSwaps[i][0])] = find(allowedSwaps[i][1]);
    }
    var mp = {};
    for ( var i = 0; i < n; i++ ) {
        if ( mp[find(i)] == undefined ) {
            mp[find(i)] = {};
        }
        if ( mp[find(i)][source[i]] == undefined ) {
            mp[find(i)][source[i]] = 0;
        }
        mp[find(i)][source[i]] += 1;
    }
    var res = 0;
    for ( var i = 0; i < n; i++ ) {
        if ( mp[find(i)][target[i]] > 0 ) {
            mp[find(i)][target[i]] -= 1;
        }
        else {
            res += 1;
        }
    }
    return res;
}

