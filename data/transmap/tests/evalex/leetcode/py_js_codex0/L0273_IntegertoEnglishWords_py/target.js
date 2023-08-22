function f_gold(num) {
    if (num == 0) {
        return 'Zero';
    }
    var lt20 = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    var tens = [
        '',
        'Ten',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];
    var thousands = ['Billion', 'Million', 'Thousand', ''];
    function transfer(num) {
        if (num == 0) {
            return '';
        }
        if (num < 20) {
            return lt20[num] + ' ';
        }
        if (num < 100) {
            return tens[num / 10] + ' ' + transfer(num % 10);
        }
        return lt20[num / 100] + ' Hundred ' + transfer(num % 100);
    }
    var res = [];
    var i = 1000000000;
    var j = 0;
    while (i > 0) {
        if (num / i != 0) {
            res.push(transfer(num / i));
            res.push(thousands[j]);
            res.push(' ');
            num %= i;
        }
        j += 1;
        i /= 1000;
    }
    return res.join('').trim();
}

