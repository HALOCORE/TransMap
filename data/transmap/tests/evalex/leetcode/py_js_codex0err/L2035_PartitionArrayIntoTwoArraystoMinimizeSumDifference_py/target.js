
function f_gold ( nums ) {
    var n = nums.length >> 1;
    var f = new Map();
    var g = new Map();
    for ( var i = 1 << n; i >= 0; i-- ) {
        var s = 0;
        var cnt = 0;
        var s1 = 0;
        var cnt1 = 0;
        for ( var j = n - 1; j >= 0; j-- ) {
            if ( ( i & ( 1 << j ) ) != 0 ) {
                s += nums[j];
                cnt += 1;
                s1 += nums[n + j];
                cnt1 += 1;
            }
            else {
                s -= nums[j];
                s1 -= nums[n + j];
            }
        }
        if ( f.has( cnt ) ) {
            f.get( cnt ).add( s );
        }
        else {
            f.set( cnt, new Set( [ s ] ) );
        }
        if ( g.has( cnt1 ) ) {
            g.get( cnt1 ).add( s1 );
        }
        else {
            g.set( cnt1, new Set( [ s1 ] ) );
        }
    }
    var ans = Number.MAX_VALUE;
    for ( var i = 0; i <= n; i++ ) {
        var fi = Array.from( f.get( i ) ).sort( function ( a, b ) { return a - b; } );
        var gi = Array.from( g.get( n - i ) ).sort( function ( a, b ) { return a - b; } );
        for ( var a of fi ) {
            var left = 0;
            var right = gi.length - 1;
            var b = -a;
            while ( left < right ) {
                var mid = ( left + right ) >> 1;
                if ( gi[mid] >= b ) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }
            ans = Math.min(