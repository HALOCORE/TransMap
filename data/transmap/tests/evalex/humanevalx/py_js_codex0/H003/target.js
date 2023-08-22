
function belowZero(operations) {
    var balance = 0;

    for (var i = 0; i < operations.length; i++) {
        balance += operations[i];
        if (balance < 0) {
            return true;
        }
    }

    return false;
}

