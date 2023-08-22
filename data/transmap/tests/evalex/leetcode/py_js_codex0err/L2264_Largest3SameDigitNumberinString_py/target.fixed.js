function f_gold(num) {
    for (let i = 9; i >= 0; i--) {
        let t = Array(3).fill(String(i)).join("");
        if (num.includes(t)) {
            return t;
        }
    }
    return '';
}

