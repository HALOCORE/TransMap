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
///// Segment BEGIN p1
///// Segment END

///// Segment BEGIN p2
///// Segment END

///// Segment BEGIN p3
///// Segment END

///// Segment BEGIN p4
///// Segment END

///// Segment BEGIN p5
///// Segment END

///// Segment BEGIN p6
///// Segment END

///// Segment BEGIN p7
///// Segment END

///// Segment BEGIN p8
///// Segment END

///// Segment BEGIN p9
///// Segment END

///// Segment BEGIN p10
///// Segment END

///// Segment BEGIN p11
///// Segment END

///// Segment BEGIN p12
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