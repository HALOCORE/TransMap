function f_gold ( nums ) {
    nums.sort();
    var n = nums.length;
    var f = Array(n).fill(0);
    var p = Array(n).fill(0);
    for ( var i = 0; i < n; i++ ) {
        var l = 1;
        var pre = i;
        for ( var j = 0; j < n; j++ ) {
            if ( nums[i] % nums[j] == 0 && f[j] + 1 > l ) {
                l = f[j] + 1;
                pre = j;
            }
        }
        f[i] = l;
        p[i] = pre;
    }
    var max_len = 0;
    var max_index = 0;
    for ( var i = 0; i < f.length; i++ ) {
        if ( max_len < f[i] ) {
            max_len = f[i];
            max_index = i;
        }
    }
    var ans = [];
    while ( ans.length < max_len ) {
        ans.push(nums[max_index]);
        max_index = p[max_index];
    }
    return ans.reverse();
}

