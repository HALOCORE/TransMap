
function f_gold(groupSizes) {
    let mp = new Map();
    for (let i = 0; i < groupSizes.length; i++) {
        if (mp.has(groupSizes[i])) {
            mp.get(groupSizes[i]).push(i);
        } else {
            mp.set(groupSizes[i], [i]);
        }
    }
    let res = [];
    for (let [x, indexes] of mp) {
        let l = indexes.length;
        for (let i = 0; i < l; i += x) {
            res.push(indexes.slice(i, i + x));
        }
    }
    return res;
}

