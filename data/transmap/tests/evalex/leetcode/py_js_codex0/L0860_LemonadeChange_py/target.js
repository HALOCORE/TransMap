function f_gold(bills) {
    let five = 0;
    let ten = 0;
    for (let bill of bills) {
        if (bill == 5) {
            five += 1;
        }
        else if (bill == 10) {
            ten += 1;
            five -= 1;
        }
        else if (bill == 20) {
            if (ten > 0) {
                ten -= 1;
                five -= 1;
            }
            else {
                five -= 3;
            }
        }
        if (five < 0) {
            return false;
        }
    }
    return true;
}

