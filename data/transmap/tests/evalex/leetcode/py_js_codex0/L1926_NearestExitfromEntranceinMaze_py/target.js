
function f_gold ( maze, entrance ) {
    var m = maze.length;
    var n = maze[0].length;
    var i = entrance[0];
    var j = entrance[1];
    var q = [ [ i, j ] ];
    maze[i][j] = '+';
    var ans = 0;
    while ( q.length > 0 ) {
        ans += 1;
        for ( var _ = 0; _ < q.length; _++ ) {
            i = q.shift()[0];
            j = q.shift()[1];
            for ( var a = 0; a < 2; a++ ) {
                for ( var b = 0; b < 2; b++ ) {
                    var x = i + a;
                    var y = j + b;
                    if ( x >= 0 && x < m && y >= 0 && y < n && maze[x][y] == '.' ) {
                        if ( x == 0 || x == m - 1 || y == 0 || y == n - 1 ) {
                            return ans;
                        }
                        q.push( [ x, y ] );
                        maze[x][y] = '+';
                    }
                }
            }
        }
    }
    return -1;
}

