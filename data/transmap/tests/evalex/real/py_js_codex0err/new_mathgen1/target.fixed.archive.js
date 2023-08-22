///// Segment IGNORE BEGIN
"use strict";

const crypto = require('crypto');
var seed = 1;
Math.random = function(){
  const hash = crypto.createHash('sha256');
  hash.update(seed.toString());
  seed += 1;
  const hex = hash.digest('hex');
  return parseInt(hex, 16) / (2 ** 256 - 1);
}
///// Segment IGNORE END
///// Segment BEGIN p1 DONE
function bcd_to_decimal(max_number = 10000) {
    let n = Math.floor(Math.random() * (max_number - 1000 + 1) + 1000);
    let binstring = '';
    while (true) {
        let [q, r] = [Math.floor(n / 10), n % 10];
        let nibble = r.toString(2).replace('0b', "");
        while (nibble.length < 4) {
            nibble = '0' + nibble;
        }
        binstring = nibble + binstring;
        if (q === 0) {
            break;
        } else {
            n = q;
        }
    }

    let problem = `Integer of Binary Coded Decimal $${n} =$ `;
    let solution = `$${parseInt(binstring, 2)}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p2 DONE
function binary_2s_complement(maxDigits = 10) {
    let digits = Math.floor(Math.random() * maxDigits) + 1;
    let question = Array.from({length: digits}, () => Math.floor(Math.random() * 2)).join('').replace(/^0+/, '');

    let answer = [];
    for (let i of question) {
        answer.push(Number(!Boolean(Number(i))).toString());
    }

    let carry = true;
    let j = answer.length - 1;
    while (j >= 0) {
        if (answer[j] === '0') {
            answer[j] = '1';
            carry = false;
            break;
        }
        answer[j] = '0';
        j -= 1;
    }

    if (j === 0 && carry === true) {
        answer.unshift('1');
    }

    let problem = `2's complement of $${question} = $`;
    let solution = answer.join('').replace(/^0+/, '');
    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment BEGIN p3 DONE
function binary_complement_1s(maxDigits = 10) {
    let question = [...Array(Math.floor(Math.random() * maxDigits) + 1)].map(() => Math.floor(Math.random() * 2)).join("");
    let answer = question.split("").map(digit => digit === "1" ? "0" : "1").join("");

    let problem = `$${question} = $`;
    return [problem, `$${answer}$`];
}
///// Segment END

///// Segment BEGIN p4 DONE
function binary_to_decimal(max_dig = 10) {
    let problem = [...Array(Math.floor(Math.random() * max_dig) + 1)].map(() => Math.floor(Math.random() * 2)).join('');
    let solution = `$${parseInt(problem, 2)}$`;
    return [`$${problem}$`, solution];
}
///// Segment END

///// Segment BEGIN p5 DONE
function binary_to_hex(max_dig = 10) {
    let problem = [...Array(Math.floor(Math.random() * max_dig) + 1)].map(() => Math.floor(Math.random() * 2)).join('');
    let solution = `$0x${parseInt(problem, 2).toString(16)}$`;
    return [`$${problem}$`, solution];
}
///// Segment END

///// Segment BEGIN p6 DONE
function decimal_to_bcd(max_number = 10000) {
    let n = Math.floor(Math.random() * (max_number - 1000 + 1) + 1000);
    let x = n;
    let bcdstring = '';
    while (x > 0) {
        let nibble = x % 16;
        bcdstring = nibble.toString() + bcdstring;
        x >>= 4;
    }
    let problem = `BCD of Decimal Number $${n} = $`;
    return [problem, `$${bcdstring}$`];
}
///// Segment END

///// Segment BEGIN p7 DONE
function decimal_to_binary(max_dec = 99) {
    const a = Math.floor(Math.random() * max_dec) + 1;
    const b = a.toString(2);

    const problem = `Binary of $${a} = $`;
    const solution = `$${b}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p8 DONE
function decimal_to_hexadeci(max_dec = 1000) {
    const a = Math.floor(Math.random() * (max_dec + 1));
    const b = `0x` + a.toString(16);

    const problem = `Hexadecimal of $${a} = $`;
    const solution = `$${b}$`;

    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p9 DONE
function decimal_to_octal(max_decimal = 4096) {
    const x = Math.floor(Math.random() * (max_decimal + 1));

    const problem = `The decimal number $${x}$ in octal is: `;
    const solution = `$0o${x.toString(8)}$`;

    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p10 DONE
function fibonacci_series(min_no = 1) {
    const n = Math.floor(Math.random() * (20 - min_no + 1) + min_no);

    function createFibList(n) {
        const list = [];
        for (let i = 0; i < n; i++) {
            if (i < 2) {
                list.push(i);
            } else {
                const val = list[i - 1] + list[i - 2];
                list.push(val);
            }
        }
        return list;
    }

    const fibList = createFibList(n);

    const problem = `The Fibonacci Series of the first $${n}$ numbers is ?`;
    const solution = fibList.join(", ");
    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment BEGIN p11 DONE
function modulo_division(max_res = 99, max_modulo = 99) {
    const a = Math.floor(Math.random() * (max_modulo + 1));
    const b = Math.floor(Math.random() * (Math.min(max_res, max_modulo) + 1));
    const c = b !== 0 ? a % b : 0;

    const problem = `$${a}$ % $${b}$ = $`;
    const solution = `$${c}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p12 DONE
function nth_fibonacci_number(max_n = 100) {
    const gratio = (1 + Math.sqrt(5)) / 2;
    const n = Math.floor(Math.random() * max_n) + 1;

    const problem = `What is the ${n}th Fibonacci number?`;
    const solution = Math.round(
        (Math.pow(gratio, n) - Math.pow(-gratio, -n)) / (Math.sqrt(5))
    );

    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}

function test() {
    function test_p1() {
        var a, b;
        [a, b] = bcd_to_decimal();
        assert_equal(a, 'Integer of Binary Coded Decimal $4 =$ ');
        assert_equal(b, '$18304$');
    }
    test_p1();
    console.log('p1 passed');

    function test_p2() {
        var a, b;
        [a, b] = binary_2s_complement();
        assert_equal(a, "2's complement of $1100000 = $");
        assert_equal(b, '$100000$');
    }
    test_p2();
    console.log('p2 passed');

    function test_p3() {
        var a, b;
        [a, b] = binary_complement_1s();
        assert_equal(a, '$01110 = $');
        assert_equal(b, '$10001$');
    }
    test_p3();
    console.log('p3 passed');

    function test_p4() {
        var a, b;
        [a, b] = binary_to_decimal();
        assert_equal(a, '$1100$');
        assert_equal(b, '$12$');
    }
    test_p4();
    console.log('p4 passed');

    function test_p5() {
        var a, b;
        [a, b] = binary_to_hex();
        assert_equal(a, '$1100$');
        assert_equal(b, '$0xc$');
    }
    test_p5();
    console.log('p5 passed');

    function test_p6() {
        var a, b;
        [a, b] = decimal_to_bcd();
        assert_equal(a, 'BCD of Decimal Number $4160 = $');
        assert_equal(b, '$1040$');
    }
    test_p6();
    console.log('p6 passed');

    function test_p7() {
        var a, b;
        [a, b] = decimal_to_binary();
        assert_equal(a, 'Binary of $21 = $');
        assert_equal(b, '$10101$');
    }
    test_p7();
    console.log('p7 passed');

    function test_p8() {
        var a, b;
        [a, b] = decimal_to_hexadeci();
        assert_equal(a, 'Hexadecimal of $384 = $');
        assert_equal(b, '$0x180$');
    }
    test_p8();
    console.log('p8 passed');

    function test_p9() {
        var a, b;
        [a, b] = decimal_to_octal();
        assert_equal(a, 'The decimal number $3762$ in octal is: ');
        assert_equal(b, '$0o7262$');
    }
    test_p9();
    console.log('p9 passed');

    function test_p10() {
        var a, b;
        [a, b] = fibonacci_series();
        assert_equal(a, 'The Fibonacci Series of the first $18$ numbers is ?');
        assert_equal(b, '$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597$');
    }
    test_p10();
    console.log('p10 passed');

    function test_p11() {
        var a, b;
        [a, b] = modulo_division();
        assert_equal(a, '$77$ % $52$ = $');
        assert_equal(b, '$25$');
    }
    test_p11();
    console.log('p11 passed');

    function test_p12() {
        var a, b;
        [a, b] = nth_fibonacci_number();
        assert_equal(a, 'What is the 63th Fibonacci number?');
        assert_equal(b, '$6557470319842$');
    }
    test_p12();
    console.log('p12 passed');
}
test();
///// Segment IGNORE END