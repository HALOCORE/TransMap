function f_gold(date) {
    var year, month, day;
    [year, month, day] = date.split('-').map(function (e) { return parseInt(e); });
    var d = 29;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) d = 28;
    var days = [31, d, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days.slice(0, month - 1).reduce(function (a, b) { return a + b; }, 0) + day;
}

