function total_match(lst1, lst2) {
    let l1 = 0;
    for (let st of lst1) {
        l1 += st.length;
    }
    
    let l2 = 0;
    for (let st of lst2) {
        l2 += st.length;
    }
    
    if (l1 <= l2) {
        return lst1;
    } else {
        return lst2;
    }
}

