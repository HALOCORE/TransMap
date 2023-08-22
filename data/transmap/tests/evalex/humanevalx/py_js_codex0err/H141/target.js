function file_name_check(file_name) {
    var suf = ['txt', 'exe', 'dll'];
    var lst = file_name.split(sep='.');
    if (lst.length != 2) {
        return 'No';
    }
    if (!lst[1] in suf) {
        return 'No';
    }
    if (lst[0].length == 0) {
        return 'No';
    }
    if (!lst[0][0].isalpha()) {
        return 'No';
    }
    var t = len([x for x in lst[0] if x.isdigit()]);
    if (t > 3) {
        return 'No';
    }
    return 'Yes';
}

