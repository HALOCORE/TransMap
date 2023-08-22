function f_gold(emails) {
    var s = new Set();
    for (var email of emails) {
        var local = email.split('@');
        var domain = local[1];
        local = local[0].replace('.', '');
        var i = local.indexOf('+');
        if (i != -1) {
            local = local.substring(0, i);
        }
        s.add(local + '@' + domain);
    }
    return s.size;
}

