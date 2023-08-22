function f_gold(num) {
    for (let i = 9; i >= 0; i--) {
        let t = String(i) * 3;
        if (num.includes(t)) {
            return t;
        }
    }
    return '';
}

