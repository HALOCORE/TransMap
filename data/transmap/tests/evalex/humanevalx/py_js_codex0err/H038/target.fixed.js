
function encode_cyclic(s) {
    // split string to groups. Each of length 3.
    var groups = [];
    for (let i=0;i<Math.floor((s.length+2)/3);i++) groups.push(s.substring(3 * i, Math.min(3 * i + 3, s.length)));
    // cycle elements in each group. Unless group has fewer elements than 3.
    groups = groups.map(group => (group.length === 3 ? group.slice(1) + group[0] : group));
    return groups.join("");
}

function decode_cyclic(s) {
    return encode_cyclic(encode_cyclic(s));
}

