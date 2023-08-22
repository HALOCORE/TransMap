function f_gold(jobs, workers) {
    jobs.sort();
    workers.sort();
    return Math.max(...(jobs.map((a, i) => (a + workers[i] - 1) / workers[i])));
}

