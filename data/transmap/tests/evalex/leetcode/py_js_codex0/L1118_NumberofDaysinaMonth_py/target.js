function f_gold(year, month) {
    var leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    var days = [0, 31, 29, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days[month];
}

