function f_gold(nums) {
    let n1 = n2 = 0;
    let m1 = 0;
    let m2 = 1;
    for (let m of nums) {
        if (m == m1) {
            n1 += 1;
        }
        else if (m == m2) {
            n2 += 1;
        }
        else if (n1 == 0) {
            m1 = m;
            n1 = 1;
        }
        else if (n2 == 0) {
            m2 = m;
            n2 = 1;
        }
        else {
            n1 = n1 - 1;
            n2 = n2 - 1;
        }
    }
    return [m for (m of [m1, m2]) if nums.count(m) > nums.length / 3];
}

