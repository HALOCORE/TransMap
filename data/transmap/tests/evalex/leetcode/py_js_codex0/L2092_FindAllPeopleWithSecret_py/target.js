
function f_gold ( n, meetings, firstPerson ) {
    var vis = [false];
    for ( var i = 1; i < n; i++ ) vis.push(false);
    vis[0] = vis[firstPerson] = true;
    meetings.sort(function ( a, b ) { return a[2] - b[2]; });
    var i = 0;
    var m = meetings.length;
    while ( i < m ) {
        var j = i;
        while ( j + 1 < m && meetings[j + 1][2] == meetings[i][2] ) j++;
        var s = new Set();
        var g = new Map();
        for ( var k = i; k <= j; k++ ) {
            var x = meetings[k][0];
            var y = meetings[k][1];
            if ( g.has(x) ) g.get(x).push(y);
            else g.set(x, [y]);
            if ( g.has(y) ) g.get(y).push(x);
            else g.set(y, [x]);
            s.add(x);
            s.add(y);
        }
        var q = [];
        for ( var u of s ) if ( vis[u] ) q.push(u);
        while ( q.length > 0 ) {
            var u = q.shift();
            for ( var v of g.get(u) ) if ( !vis[v] ) {
                vis[v] = true;
                q.push(v);
            }
        }
        i = j + 1;
    }
    var ans = [];
    for ( var i = 0; i < n; i++ ) if ( vis[i] ) ans.push(i);
    return ans;
}

