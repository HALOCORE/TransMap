
function f_gold(numCourses, prerequisites) {
    let edges = new Map();
    let indegree = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let a = prerequisites[i][0];
        let b = prerequisites[i][1];
        if (edges.has(b)) {
            edges.get(b).push(a);
        } else {
            edges.set(b, [a]);
        }
        indegree[a] += 1;
    }
    let q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    let n = 0;
    while (q.length > 0) {
        let b = q.shift();
        n += 1;
        for (let i = 0; i < edges.get(b).length; i++) {
            let a = edges.get(b)[i];
            indegree[a] -= 1;
            if (indegree[a] == 0) {
                q.push(a);
            }
        }
    }
    return n == numCourses;
}

