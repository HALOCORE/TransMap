function f_gold(num1, num2) {
    var ans = 0;
    while (num1 && num2) {
        if (num1 >= num2) {
            num1, num2 = num2, num1;
        }
        num2 -= num1;
        ans += 1;
    }
    return ans;
}

