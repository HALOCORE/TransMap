function f_gold(password) {
    if (password.length < 8) {
        return false;
    }
    var ans = 0;
    for (var i = 0; i < password.length; i++) {
        if (i && password[i - 1] == password[i]) {
            return false;
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            ans |= 1;
        }
        else if (password[i] >= 'A' && password[i] <= 'Z') {
            ans |= 2;
        }
        else if (password[i] >= '0' && password[i] <= '9') {
            ans |= 4;
        }
        else {
            ans |= 8;
        }
    }
    return ans == 15;
}

