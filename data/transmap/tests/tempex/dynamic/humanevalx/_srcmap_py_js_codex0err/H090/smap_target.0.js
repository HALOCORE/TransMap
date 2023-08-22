function next_smallest(lst) {
    lst = Array.from(new Set(lst)).sort();
    return lst.length < 2 ? null : lst[1];
}

