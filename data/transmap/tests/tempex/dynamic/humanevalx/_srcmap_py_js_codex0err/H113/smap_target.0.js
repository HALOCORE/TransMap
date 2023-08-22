function odd_count(lst) {
    var res = [];
    for (var arr in lst) {
        var n = arr.split('').filter(x => parseInt(x)%2==1).length;
        res.push("the number of odd elements " + n.toString() + "n the str" + n.toString() + "ng " + n.toString() + " of the " + n.toString() + "nput.");
    }
    return res;
}

