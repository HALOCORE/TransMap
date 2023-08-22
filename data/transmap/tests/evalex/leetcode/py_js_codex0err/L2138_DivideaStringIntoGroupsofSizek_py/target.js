function f_gold(s, k, fill) {
    return [s.substring(i, i + k).padEnd(k, fill) for (i = 0; i < s.length; i += k)];
}

