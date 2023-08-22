function reverse_delete(s,c){
    s = s.split('').filter(char => !c.includes(char)).join('');
    return [s,s.split('').reverse().join('') == s];
}

