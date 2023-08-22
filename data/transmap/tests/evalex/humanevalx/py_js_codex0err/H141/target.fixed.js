function file_name_check(file_name) {
    var suf = ['txt', 'exe', 'dll'];
    var lst = file_name.split('.');
    if (lst.length != 2) {
        return 'No';
    }
    if (!suf.includes(lst[1])) {
        return 'No';
    }
    if (lst[0].length == 0) {
        return 'No';
    }
    if(!/[a-zA-Z]/.test(lst[0][0])){
        return 'No';
    }
    var t = lst[0].split('').filter(x => /[0-9]/.test(x)).length;
    if (t > 3) {
        return 'No';
    }
    return 'Yes';
}

