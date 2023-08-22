const f_gold = (answers) => {
    let counter = new Map();
    for (let i = 0; i < answers.length; i++) {
        if (counter.has(answers[i])) {
            counter.set(answers[i], counter.get(answers[i]) + 1);
        } else {
            counter.set(answers[i], 1);
        }
    }
    let sum = 0;
    for (let [k, v] of counter) {
        sum += Math.ceil(v / (k + 1)) * (k + 1);
    }
    return sum;
}

