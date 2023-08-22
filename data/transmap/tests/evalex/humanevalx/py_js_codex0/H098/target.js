function count_upper(s) {
    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        if ("AEIOU".includes(s[i])) {
            count += 1;
        }
    }
    return count;
}

