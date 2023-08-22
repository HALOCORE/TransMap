
function f_gold ( grid ) {
    var m = grid.length;
    var n = grid[0].length;
    var cnt = 0;
    var start = null;
    for ( var i = 0; i < m; i++ ) {
        for ( var j = 0; j < n; j++ ) {
            cnt += grid[i][j].islower();
            if ( grid[i][j] == '@' ) {
                start = [i, j];
            }
        }
    }
    var q = [[start[0], start[1], 0]];
    var dirs = [-1, 0, 1, 0, -1];
    var ans = 0;
    var mask = (1 << cnt) - 1;
    var vis = {};
    vis[start[0] + "," + start[1] + "," + 0] = true;
    while ( q.length > 0 ) {
        for ( var _ = 0; _ < q.length; _++ ) {
            var i = q[0][0];
            var j = q[0][1];
            var state = q[0][2];
            q.shift();
            if ( state == mask ) {
                return ans;
            }
            for ( var k = 0; k < 4; k++ ) {
                var nxt = state;
                var x = i + dirs[k];
                var y = j + dirs[k + 1];
                if ( 0 <= x && x < m && 0 <= y && y < n && grid[x][y] != '#' ) {
                    if ( grid[x][y].isupper() && (nxt & (1 << (grid[x][y].charCodeAt(0) - 'A'.charCodeAt(0)))) == 0 ) {
                        continue;
                    }
                    if ( grid[x][y].islower() ) {
                        nxt |= 1 << (grid[x][y].charCodeAt(0) - 'a'.charCodeAt(0));
                    }
                    if ( !vis[x + "," + y + "," + nxt] ) {
                       