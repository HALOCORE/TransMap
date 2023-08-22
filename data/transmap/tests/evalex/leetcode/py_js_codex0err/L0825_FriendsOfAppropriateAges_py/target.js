
function f_gold(ages) {
    let counter = new Map();
    for (let i = 0; i < ages.length; i++) {
        if (counter.has(ages[i])) {
            counter.set(ages[i], counter.get(ages[i]) + 1);
        } else {
            counter.set(ages[i], 1);
        }
    }
    let ans = 0;
    for (let i = 1; i < 121; i++) {
        let n1 = counter.get(i);
        for (let j = 1; j < 121; j++) {
            let n2 = counter.get(j);
            if (!(j <= 0.5 * i + 7 || j > i || (j > 100 && i < 100))) {
                ans += n1 * n2;
                if (i == j) {
                    ans -= n2;
                }
            }
        }
    }
    return ans;
}

