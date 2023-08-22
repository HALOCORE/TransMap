
function f_gold ( numCourses, prerequisites ) {
    var edges = new Map();
    var indegree = new Array(numCourses).fill(0);
    for ( var i = 0; i < prerequisites.length; i++ ) {
        var a = prerequisites[i][0];
        var b = prerequisites[i][1];
        if ( edges.has(b) ) {
            edges.get(b).push(a);
        } else {
            edges.set(b, [a]);
        }
        indegree[a] += 1;
    }
    var q = [];
    for ( var i = 0; i < numCourses; i++ ) {
        if ( indegree[i] == 0 ) {
            q.push(i);
        }
    }
    var ans = [];
    while ( q.length > 0 ) {
        var b = q.shift();
        ans.push(b);
        var a_list = edges.get(b);
        for ( var i = 0; i < a_list.length; i++ ) {
            indegree[a_list[i]] -= 1;
            if ( indegree[a_list[i]] == 0 ) {
                q.push(a_list[i]);
            }
        }
    }
    return ans.length == numCourses ? ans : [];
}

