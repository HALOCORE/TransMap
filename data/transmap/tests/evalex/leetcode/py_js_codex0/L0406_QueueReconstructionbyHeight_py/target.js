function f_gold(people) {
    people.sort(function (x, y) { return -x[0] + y[0] || x[1] - y[1]; });
    var ans = [];
    for (var i = 0; i < people.length; i++) {
        ans.splice(people[i][1], 0, people[i]);
    }
    return ans;
}

