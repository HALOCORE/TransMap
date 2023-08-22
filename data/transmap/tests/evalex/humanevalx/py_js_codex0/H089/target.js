function encrypt(s) {
    let d = 'abcdefghijklmnopqrstuvwxyz';
    let out = '';
    for (let c of s) {
        if (d.includes(c)) {
            out += d[(d.indexOf(c)+2*2) % 26];
        } else {
            out += c;
        }
    }
    return out;
}

