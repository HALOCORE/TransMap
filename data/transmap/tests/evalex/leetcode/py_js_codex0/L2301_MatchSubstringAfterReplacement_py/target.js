function f_gold(s, sub, mappings) {
    let d = new Map();
    for (let i = 0; i < mappings.length; i++) {
        let a = mappings[i][0];
        let b = mappings[i][1];
        if (d.has(a)) {
            d.get(a).add(b);
        }
        else {
            let set = new Set();
            set.add(b);
            d.set(a, set);
        }
    }
    let n = s.length;
    let k = sub.length;
    for (let i = 0; i < n - k + 1; i++) {
        let flag = true;
        for (let j = 0; j < k; j++) {
            let a = s[i + j];
            let b = sub[j];
            if (a == b || d.has(a) && d.get(a).has(b)) {
                continue;
            }
            else {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }
    }
    return false;
}

