
function f_gold(arr) {
    let idx = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (idx.has(arr[i])) {
            idx.get(arr[i]).push(i);
        } else {
            idx.set(arr[i], [i]);
        }
    }
    let q = [[0, 0]];
    let vis = new Set();
    vis.add(0);
    while (q.length > 0) {
        let i = q[0][0];
        let step = q[0][1];
        q.shift();
        if (i == arr.length - 1) {
            return step;
        }
        let v = arr[i];
        step += 1;
        for (let j = 0; j < idx.get(v)?.length; j++) {
            if (!vis.has(idx.get(v)[j])) {
                vis.add(idx.get(v)[j]);
                q.push([idx.get(v)[j], step]);
            }
        }
        idx.delete(v);
        if (i + 1 < arr.length && !vis.has(i + 1)) {
            vis.add(i + 1);
            q.push([i + 1, step]);
        }
        if (i - 1 >= 0 && !vis.has(i - 1)) {
            vis.add(i - 1);
            q.push([i - 1, step]);
        }
    }
}

