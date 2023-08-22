function histogram(test) {
    let dict1 = {};
    let list1 = test.split(" ");
    let t = 0;

    for (let i of list1) {
        if (list1.count(i) > t && i != '') {
            t = list1.count(i);
        }
    }
    if (t > 0) {
        for (let i of list1) {
            if (list1.count(i) == t) {

                dict1[i] = t;
            }
        }
    }
    return dict1;
}

