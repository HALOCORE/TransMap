function f(n) {
    let ret = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            let x = 1;
            for (let j = 1; j <= i; j++) {
                x *= j;
            }
            ret.push(x);
        } else {
            let x = 0;
            for (let j = 1; j <= i; j++) {
                x += j;
            }
            ret.push(x);
        }
    }
    return ret;
}

