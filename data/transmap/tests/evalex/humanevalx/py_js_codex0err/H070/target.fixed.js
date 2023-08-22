function strange_sort_list(lst) {
    let res = [], _switch = true;
    while (lst.length > 0) {
        res.push(_switch? Math.min(...lst) : Math.max(...lst));
        lst.splice(lst.indexOf(res[res.length - 1]), 1);
        _switch = !_switch;
    }
    return res;
}

