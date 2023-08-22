function f_gold(votes) {
    let d = new Map();
    for (let vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            if (d.has(vote[i])) {
                d.set(vote[i], d.get(vote[i]) - 1);
            } else {
                d.set(vote[i], -1);
            }
        }
    }
    let ans = votes[0].split("").sort((a, b) => {
        if (d.get(a) < d.get(b)) {
            return -1;
        } else if (d.get(a) > d.get(b)) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });
    return ans.join("");
}

