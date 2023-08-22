function histogram(test) {
    let dict1 = {};
    let list1 = test.split(" ");
    let t = 0;

    for (let i of list1) {
        if (list1.filter(x => x == i).length > t && i != '') {
            t = list1.filter(x => x == i).length;
        }
    }
    if (t > 0) {
        for (let i of list1) {
            if (list1.filter(x => x == i).length == t) {

                dict1[i] = t;
            }
        }
    }
    return dict1;
}

