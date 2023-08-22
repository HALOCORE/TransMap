const f_gold = (widths, s) => {
    let last = 0;
    let row = 1;
    for (let c of s) {
        let w = widths[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        if (last + w <= 100) {
            last += w;
        } else {
            row += 1;
            last = w;
        }
    }
    return [row, last];
}

