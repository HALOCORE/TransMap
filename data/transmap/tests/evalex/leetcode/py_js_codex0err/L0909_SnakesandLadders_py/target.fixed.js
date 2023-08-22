
function f_gold ( board ) {
    function get ( x ) {
        let i = Math.floor( ( x - 1 ) / n );
        let j = ( x - 1 ) % n;
        if ( i & 1 ) {
            j = n - 1 - j;
        }
        return [n - 1 - i, j];
    }
    let n = board.length;
    let q = [ 1 ];
    let vis = { 1: true };
    let ans = 0;
    while ( q.length > 0 ) {
        for ( let _ = 0; _ < q.length; _++ ) {
            let curr = q.shift();
            if ( curr == n * n ) {
                return ans;
            }
            for ( let next = curr + 1; next < Math.min( curr + 7, n * n + 1 ); next++ ) {
                let [i, j] = get( next );
                if ( board[ i ] && board[ i ][ j ] != -1 ) {
                    next = board[ i ][ j ];
                }
                if ( !vis[ next ] ) {
                    q.push( next );
                    vis[ next ] = true;
                }
            }
        }
        ans += 1;
    }
    return -1;
}

