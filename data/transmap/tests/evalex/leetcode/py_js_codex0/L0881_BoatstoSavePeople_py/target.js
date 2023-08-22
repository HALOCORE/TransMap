function f_gold(people, limit) {
    people.sort();
    var num, i, j;
    num = i = 0;
    j = people.length - 1;
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i += 1;
        }
        j -= 1;
        num += 1;
    }
    return num;
}

