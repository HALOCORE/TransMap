function f_gold(students, sandwiches) {
    var counter = {};
    for (var i = 0; i < students.length; i++) {
        if (counter[students[i]] == undefined) {
            counter[students[i]] = 1;
        } else {
            counter[students[i]] += 1;
        }
    }
    for (var i = 0; i < sandwiches.length; i++) {
        if (counter[sandwiches[i]] == undefined || counter[sandwiches[i]] == 0) {
            return students.length - i;
        }
        counter[sandwiches[i]] -= 1;
    }
    return 0;
}

