function anti_shuffle(s) {
    return s.split(' ').map(i => i.split('').sort().join('')).join(' ');
}

