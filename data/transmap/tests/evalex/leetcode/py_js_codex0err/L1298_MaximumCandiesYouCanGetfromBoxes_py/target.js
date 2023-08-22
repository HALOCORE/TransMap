
function f_gold(status, candies, keys, containedBoxes, initialBoxes) {
    let q = [i for (i of initialBoxes) if (status[i] == 1)];
    let ans = sum(candies[i] for (i of initialBoxes) if (status[i] == 1));
    let has = new Set(initialBoxes);
    let took = new Set(i for (i of initialBoxes) if (status[i] == 1));
    while (q.length > 0) {
        let i = q.shift();
        for (let k of keys[i]) {
            status[k] = 1;
            if (has.has(k) && !took.has(k)) {
                ans += candies[k];
                took.add(k);
                q.push(k);
            }
        }
        for (let j of containedBoxes[i]) {
            has.add(j);
            if (status[j] && !took.has(j)) {
                ans += candies[j];
                took.add(j);
                q.push(j);
            }
        }
    }
    return ans;
}

