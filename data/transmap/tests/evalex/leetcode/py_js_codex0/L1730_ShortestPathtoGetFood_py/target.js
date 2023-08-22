
function f_gold ( grid ) {
    function pos() {
        for ( var i = 0; i < m; i++ ) {
            for ( var j = 0; j < n; j++ ) {
                if ( grid[i][j] == '*' ) {
                    return [i, j];
                }
            }
        }
    }
    var m = grid.length;
    var n = grid[0].length;
    var q = [pos()];
    var ans = 0;
    while ( q.length > 0 ) {
        ans += 1;
        for ( var _ = 0; _ < q.length; _++ ) {
            var i = q.shift();
            var j = q.shift();
            for ( var a = 0; a < 2; a++ ) {
                for ( var b = 0; b < 2; b++ ) {
                    var x = i + a;
                    var y = j + b;
                    if ( 0 <= x < m && 0 <= y < n ) {
                        if ( grid[x][y] == '#' ) {
                            return ans;
                        }
                        if ( grid[x][y] == 'O' ) {
                            grid[x][y] = 'X';
                            q.push(x);
                            q.push(y);
                        }
                    }
                }
            }
        }
    }
    return -1;
}

