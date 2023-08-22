function f_gold(tasks) {
    let cnt = new Map();
    for (let i = 0; i < tasks.length; i++) {
        if (cnt.has(tasks[i])) {
            cnt.set(tasks[i], cnt.get(tasks[i]) + 1);
        } else {
            cnt.set(tasks[i], 1);
        }
    }
    let mi = Number.MAX_SAFE_INTEGER;
    for (let [key, value] of cnt) {
        if (value < mi) {
            mi = value;
        }
    }
    if (mi == 1) {
        return -1;
    }
    let sum = 0;
    for (let [key, value] of cnt) {
        sum += Math.floor(value / 3) + (0 if value % 3 == 0 else 1);
    }
    return sum;
}

