function strange_sort_list(lst) {
    let res = [], switch = true;
    while (lst.length > 0) {
        res.push(Math.min(...lst) if switch else Math.max(...lst));
        lst.splice(lst.indexOf(res[res.length - 1]), 1);
        switch = !switch;
    }
    return res;
}

