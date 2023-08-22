function f_gold(s) {
    return [
        String.fromCharCode(i) + j
        for (let i = s.charCodeAt(0); i <= s.charCodeAt(s.length - 2); i++)
        for (let j = parseInt(s[1]); j <= parseInt(s[s.length - 1]); j++)
    ];
}

