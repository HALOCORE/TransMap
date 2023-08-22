function f_gold ( nums, l, r ) {
    function check ( nums, l, r ) {
        if ( r - l < 2 ) {
            return true;
        }
        var s = new Set(nums.slice(l, r + 1));
        var mx = Math.max(...nums.slice(l, r + 1));
        var mi = Math.min(...nums.slice(l, r + 1));
        if ( ( mx - mi ) % ( r - l ) != 0 ) {
            return false;
        }
        var delta = ( mx - mi ) / ( r - l );
        for ( var i = 1; i < r - l + 1; i++ ) {
            if ( !s.has(mi + delta * i) ) {
                return false;
            }
        }
        return true;
    }
    return l.map(function ( _, i ) {
        return check(nums, l[i], r[i]);
    });
}

