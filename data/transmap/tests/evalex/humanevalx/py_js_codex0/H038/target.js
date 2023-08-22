
function encode_cyclic(s) {
    // split string to groups. Each of length 3.
    var groups = [s.substring(3 * i, Math.min(3 * i + 3, s.length)) for (i in range((s.length + 2) / 3))];
    // cycle elements in each group. Unless group has fewer elements than 3.
    groups = [(group.substring(1) + group.substring(0)) if (group.length == 3) else group for (group in groups)];
    return groups.join("");
}

function decode_cyclic(s) {
    return encode_cyclic(encode_cyclic(s));
}

