function int_to_mini_roman(number) {
    let num = [1, 4, 5, 9, 10, 40, 50, 90,  
           100, 400, 500, 900, 1000];
    let sym = ["I", "IV", "V", "IX", "X", "XL",  
           "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;
    let res = '';
    while (number) { 
        let div = number / num[i]; 
        number %= num[i]; 
        while (div) { 
            res += sym[i]; 
            div -= 1;
        }
        i -= 1;
    }
    return res.toLowerCase();
}

