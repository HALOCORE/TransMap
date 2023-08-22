
function f_gold(n, reservedSeats) {
    var m = new Map();
    for (var i = 0; i < reservedSeats.length; i++) {
        var j = reservedSeats[i];
        if (m.has(i)) {
            m.set(i, m.get(i) | (1 << (10 - j)));
        } else {
            m.set(i, (1 << (10 - j)));
        }
    }
    var masks = [0b0111100000, 0b0000011110, 0b0001111000];
    var ans = (n - m.size) << 1;
    for (var v of m.values()) {
        for (var mask of masks) {
            if ((v & mask) == 0) {
                v |= mask;
                ans += 1;
            }
        }
    }
    return ans;
}

