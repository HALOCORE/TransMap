function odd_count(lst) {
    var res = [];
    for (let arr of lst) {
        var n = arr.split('').filter(x => parseInt(x)%2==1).length;
        res.append("the number of odd elements " + str(n) + "n the str" + str(n) + "ng " + str(n) + " of the " + str(n) + "nput.");
    }
    return res;
}

