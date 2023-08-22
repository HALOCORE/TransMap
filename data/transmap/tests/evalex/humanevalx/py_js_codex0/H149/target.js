function sorted_list_sum(lst) {
    lst.sort();
    let new_lst = [];
    for (let i of lst) {
        if (i.length % 2 === 0) {
            new_lst.push(i);
        }
    }
    return new_lst.sort((a, b) => a.length - b.length);
}

