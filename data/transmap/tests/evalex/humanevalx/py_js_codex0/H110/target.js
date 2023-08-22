function exchange(lst1, lst2) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < lst1.length; i++) {
        if (lst1[i] % 2 === 1) {
            odd += 1;
        }
    }
    for (let i = 0; i < lst2.length; i++) {
        if (lst2[i] % 2 === 0) {
            even += 1;
        }
    }
    if (even >= odd) {
        return "YES";
    }
    return "NO";
}

