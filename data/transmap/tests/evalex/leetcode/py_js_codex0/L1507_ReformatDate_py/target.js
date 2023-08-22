function f_gold(date) {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var mapper = {};
    for (var k = 0; k < months.length; k++) {
        mapper[months[k]] = (k + 1).toString();
    }
    var split = date.split(' ');
    var year = split[2];
    var month = mapper[split[1]];
    var day = split[0].substring(0, split[0].length - 2);
    return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
}

