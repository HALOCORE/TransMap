function sort_even(l) {
    let evens = l.filter((x, i) => i % 2 === 0);
    let odds = l.filter((x, i) => i % 2 === 1);
    evens.sort();
    let ans = [];
    for (let i = 0; i < evens.length; i++) {
        ans.push(evens[i], odds[i]);
    }
    if (evens.length > odds.length) {
        ans.push(evens[evens.length - 1]);
    }
    return ans;
}

