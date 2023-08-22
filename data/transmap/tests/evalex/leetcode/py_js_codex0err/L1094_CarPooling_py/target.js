const f_gold = (trips, capacity) => {
    let delta = [0] * 1001;
    for (let num, start, end of trips) {
        delta[start] += num;
        delta[end] -= num;
    }
    return delta.reduce((acc, curr) => acc + curr, 0) <= capacity;
}

