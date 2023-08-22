
function f_gold(arr) {
    function ones_count(x) {
        var c = 0;
        while (x) {
            x &= x - 1;
            c += 1;
        }
        return c;
    }
    var ans = 0;
    var masks = [0];
    for (var s of arr) {
        var mask = 0;
        for (var ch of s) {
            ch = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if ((mask >> ch) & 1 == 1) {
                mask = 0;
                break;
            }
            mask |= 1 << ch;
        }
        if (mask == 0) continue;
        for (var m of masks) {
            if ((m & mask) == 0) {
                masks.push(m | mask);
                ans = Math.max(ans, ones_count(m | mask));
            }
        }
    }
    return ans;
}

