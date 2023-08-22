function f_gold(s) {
    return s.split(' ').map(t => t.split('').reverse().join('')).join(' ');
}

