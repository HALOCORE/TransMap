function f_gold(s) {
    return ''.join(
        [String.fromCharCode(c.charCodeAt(0) | 32) if 'A'.charCodeAt(0) <= c.charCodeAt(0) <= 'Z'.charCodeAt(0) else c for (c of s)]
    );
}

