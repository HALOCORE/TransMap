
function is_happy(s) {
    if (s.length < 3) {
      return false;
    }
    for (let i = 0; i < s.length - 2; i++) {
      if (s[i] == s[i+1] || s[i+1] == s[i+2] || s[i] == s[i+2]) {
        return false;
      }
    }
    return true;
}

