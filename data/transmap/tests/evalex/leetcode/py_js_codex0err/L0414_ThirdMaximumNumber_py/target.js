
function f_gold(nums) {
    var m1 = m2 = m3 = -Infinity;
    for (var num of nums) {
        if (num in [m1, m2, m3]) continue;
        if (num > m1) {
            m3 = m2;
            m2 = m1;
            m1 = num;
        } else if (num > m2) {
            m3 = m2;
            m2 = num;
        } else if (num > m3) {
            m3 = num;
        }
    }
    return m3 != -Infinity ? m3 : m1;
}

