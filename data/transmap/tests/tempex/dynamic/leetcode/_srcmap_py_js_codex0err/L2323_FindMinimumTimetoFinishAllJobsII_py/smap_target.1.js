function f_gold(jobs, workers) {
    jobs.sort((a, b) => a - b);
    workers.sort();
    return Math.max(...(jobs.map((a, i) => Math.floor((a + workers[i] - 1) / workers[i]))));
}

