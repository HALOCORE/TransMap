function common(l1, l2) {
    let ret = new Set();
    for (let e1 of l1) {
        for (let e2 of l2) {
            if (e1 === e2) {
                ret.add(e1);
            }
        }
    }
    return Array.from(ret).sort();
}

