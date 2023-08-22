
function f_gold ( accounts ) {
    function find ( x ) {
        if ( p[x] != x ) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var n = accounts.length;
    var p = Array.from(Array(n).keys());
    var email_id = {};
    for ( var i = 0; i < accounts.length; i++ ) {
        var name = accounts[i][0];
        for ( var email of accounts[i].slice(1) ) {
            if ( email in email_id ) {
                p[find(i)] = find(email_id[email]);
            }
            else {
                email_id[email] = i;
            }
        }
    }
    var mp = {};
    for ( var i = 0; i < accounts.length; i++ ) {
        for ( var email of accounts[i].slice(1) ) {
            mp[find(i)].add(email);
        }
    }
    var ans = [];
    for ( var i = 0; i < mp.length; i++ ) {
        var t = [accounts[i][0]];
        t.extend(sorted(emails));
        ans.push(t);
    }
    return ans;
}

