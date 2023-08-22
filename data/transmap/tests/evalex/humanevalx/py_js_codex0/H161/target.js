function solve(s) {
    let flg = 0;
    let idx = 0;
    let new_str = s.split("");
    for (let i of s) {
        if (i.match(/[a-z]/i)) {
            new_str[idx] = i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase();
            flg = 1;
        }
        idx += 1;
    }
    s = "";
    for (let i of new_str) {
        s += i;
    }
    if (flg === 0) {
        return s.split("").reverse().join("");
    }
    return s;
}

