function f_gold(cpdomains) {
    var domains = {};
    for (var item of cpdomains) {
        var count = item.split(" ")[0];
        var domain = item.split(" ")[1];
        count = parseInt(count);
        var subs = domain.split(".");
        for (var i = 0; i < subs.length; i++) {
            var key = subs.slice(i).join(".");
            if (key in domains) {
                domains[key] += count;
            }
            else {
                domains[key] = count;
            }
        }
    }
    var result = [];
    for (var domain in domains) {
        result.push(domains[domain] + " " + domain);
    }
    return result;
}

