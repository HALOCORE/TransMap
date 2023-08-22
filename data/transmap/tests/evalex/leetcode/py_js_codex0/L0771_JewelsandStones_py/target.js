function f_gold(jewels, stones) {
    var s = new Set(jewels);
    return stones.split("").reduce(function (acc, curr) {
        if (s.has(curr)) {
            return acc + 1;
        }
        return acc;
    }, 0);
}

