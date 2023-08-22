
function f_gold(nums) {
    var m1 = -Infinity, m2 = -Infinity, m3 = -Infinity;
    for (var num of nums) {
        if ([m1, m2, m3].includes(num)) continue;
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

