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
function absolute_difference(max_a = 100, max_b = 100) {
    const a = Math.floor(Math.random() * (2 * max_a + 1)) - max_a;
    const b = Math.floor(Math.random() * (2 * max_b + 1)) - max_b;
    const absDiff = Math.abs(a - b);

    return [`$|${a}-${b}|=$`, `$${absDiff}$`];
}
///// Segment END

///// Segment BEGIN p2 DONE
function addition(max_sum = 99, max_addend = 50) {
    if (max_addend > max_sum) {
        max_addend = max_sum;
    }
    const a = Math.floor(Math.random() * (max_addend + 1));
    const b = Math.floor(Math.random() * (Math.min(max_sum - a, max_addend) + 1));
    const c = a + b;

    const problem = `$${a}+${b}=$`;
    const solution = `$${c}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p3 DONE
function compare_fractions(max_val = 10) {
    let a = Math.floor(Math.random() * max_val) + 1;
    let b = Math.floor(Math.random() * max_val) + 1;
    let c = Math.floor(Math.random() * max_val) + 1;
    let d = Math.floor(Math.random() * max_val) + 1;

    while (a === b) {
        b = Math.floor(Math.random() * max_val) + 1;
    }
    while (c === d) {
        d = Math.floor(Math.random() * max_val) + 1;
    }

    let first = a / b;
    let second = c / d;

    let solution;
    if (first > second) {
        solution = ">";
    } else if (first < second) {
        solution = "<";
    } else {
        solution = "=";
    }

    let problem = `Which symbol represents the comparison between $\\frac{${a}}{${b}}$ and $\\frac{${c}}{${d}}$?`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p4 DONE
function cube_root(min_no = 1, max_no = 1000) {
    let b = Math.floor(Math.random() * (max_no - min_no + 1) + min_no);
    let a = Math.cbrt(b);

    return [`What is the cube root of: $\\sqrt[3]{${b}}=$ to 2 decimal places?`, `$${a.toFixed(2)}$`];
}
///// Segment END

///// Segment BEGIN p5 DONE
function divide_fractions(max_val = 10) {
    let a = Math.floor(Math.random() * max_val) + 1;
    let b = Math.floor(Math.random() * max_val) + 1;

    while (a === b) {
        b = Math.floor(Math.random() * max_val) + 1;
    }

    let c = Math.floor(Math.random() * max_val) + 1;
    let d = Math.floor(Math.random() * max_val) + 1;

    while (c === d) {
        d = Math.floor(Math.random() * max_val) + 1;
    }

    function calculate_gcd(x, y) {
        while (y) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    let tmp_n = a * d;
    let tmp_d = b * c;

    let gcd = calculate_gcd(tmp_n, tmp_d);
    let sol_numerator = Math.floor(tmp_n / gcd);
    let sol_denominator = Math.floor(tmp_d / gcd);

    return [`$\\frac{${a}}{${b}}\\div\\frac{${c}}{${d}}=$`, `$\\frac{${sol_numerator}}{${sol_denominator}}$`];
}
///// Segment END

///// Segment BEGIN p6 DONE
function division(max_a = 25, max_b = 25) {
    const a = Math.floor(Math.random() * max_a) + 1;
    const b = Math.floor(Math.random() * max_b) + 1;

    const divisor = a * b;
    const dividend = Math.random() < 0.5 ? a : b;
    const quotient = Math.floor(divisor / dividend);

    return [`$${divisor}\\div${dividend}=$`, `$${quotient}$`];
}
///// Segment END

///// Segment BEGIN p7 DONE
function exponentiation(max_base = 20, max_expo = 10) {
    const base = Math.floor(Math.random() * max_base) + 1;
    const expo = Math.floor(Math.random() * max_expo) + 1;

    return [`$${base}^{${expo}}=$`, `$${base ** expo}$`];
}
///// Segment END

///// Segment BEGIN p8 DONE
function factorial(max_input = 6) {
    let a = Math.floor(Math.random() * (max_input + 1));
    let n = a;
    let b = 1;
    while (a !== 1 && n > 0) {
        b *= n;
        n -= 1;
    }

    return [`$${a}! =$`, `$${b}$`];
}
///// Segment END

///// Segment BEGIN p9 DONE
function fraction_multiplication(max_val = 10) {
    let a = Math.floor(Math.random() * max_val) + 1;
    let b = Math.floor(Math.random() * max_val) + 1;
    let c = Math.floor(Math.random() * max_val) + 1;
    let d = Math.floor(Math.random() * max_val) + 1;

    while (a === b) {
        b = Math.floor(Math.random() * max_val) + 1;
    }

    while (c === d) {
        d = Math.floor(Math.random() * max_val) + 1;
    }

    function calculate_gcd(x, y) {
        while (y) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    let tmp_n = a * c;
    let tmp_d = b * d;

    let gcd = calculate_gcd(tmp_n, tmp_d);

    let problem = `$\\frac{${a}}{${b}}\\cdot\\frac{${c}}{${d}}=$`;
    let solution;
    if (tmp_d === 1 || tmp_d === gcd) {
        solution = `$\\frac{${tmp_n}}{${gcd}}$`;
    } else {
        solution = `$\\frac{${Math.floor(tmp_n / gcd)}}{${Math.floor(tmp_d / gcd)}}$`;
    }
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p10 DONE
function fraction_to_decimal(max_res = 99, max_divid = 99) {
    const a = Math.floor(Math.random() * (max_divid + 1));
    const b = Math.floor(Math.random() * (Math.min(max_res, max_divid) - 1)) + 1;
    const c = Math.round(a / b * 100) / 100;

    return [`$${a}\\div${b}=$`, `$${c}$`];
}
///// Segment END

///// Segment BEGIN p11 DONE
function greatest_common_divisor(numbers_count = 2, max_num = 10 ** 3) {
    function greatestCommonDivisorOfTwoNumbers(number1, number2) {
        number1 = Math.abs(number1);
        number2 = Math.abs(number2);
        while (number2 > 0) {
            [number1, number2] = [number2, number1 % number2];
        }
        return number1;
    }

    numbers_count = Math.max(numbers_count, 2);
    let numbers = [];
    for (let i = 0; i < numbers_count; i++) {
        numbers.push(Math.floor(Math.random() * (max_num + 1)));
    }

    let greatestCommonDivisor = greatestCommonDivisorOfTwoNumbers(numbers[0], numbers[1]);

    for (let index = 1; index < numbers_count; index++) {
        greatestCommonDivisor = greatestCommonDivisorOfTwoNumbers(numbers[index], greatestCommonDivisor);
    }

    return [`$GCD(${numbers.join(",")})=$`, `$${greatestCommonDivisor}$`];
}
///// Segment END

///// Segment BEGIN p12 DONE
function is_composite(max_num = 250) {
    const a = Math.floor(Math.random() * (max_num - 2 + 1) + 2);

    const problem = `Is $${a}$ composite?`;
    if (a === 0 || a === 1) {
        return [problem, "No"];
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return [problem, "Yes"];
        }
    }
    const solution = "No";

    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p13 DONE
function is_prime(max_num = 100) {
    const a = Math.floor(Math.random() * (max_num - 2 + 1) + 2);
    const problem = `Is $${a}$ prime?`;
    if (a === 2) {
        return [problem, "Yes"];
    }
    if (a % 2 === 0) {
        return [problem, "No"];
    }
    for (let i = 3; i <= Math.floor(a / 2) + 1; i += 2) {
        if (a % i === 0) {
            return [problem, "No"];
        }
    }
    const solution = "Yes";
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p14 DONE
function multiplication(max_multi = 12) {
    const a = Math.floor(Math.random() * (max_multi + 1));
    const b = Math.floor(Math.random() * (max_multi + 1));
    const c = a * b;

    return [`$${a}\\cdot${b}=$`, `$${c}$`];
}
///// Segment END

///// Segment BEGIN p15 DONE
function percentage(max_value = 99, max_percentage = 99) {
    const a = Math.floor(Math.random() * max_percentage) + 1;
    const b = Math.floor(Math.random() * max_value) + 1;
    const problem = `What is $${a}$% of $${b}$?`;
    const percentage = (a / 100) * b;
    const formatted_float = percentage.toFixed(2);
    const solution = `$${formatted_float}$`;

    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p16 DONE
function percentage_difference(max_value = 200, min_value = 0) {
    const value_a = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
    const value_b = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);

    let diff = 2 * (Math.abs(value_a - value_b) / Math.abs(value_a + value_b)) * 100;
    diff = Math.round(diff * 100) / 100;

    const problem = `What is the percentage difference between $${value_a}$ and $${value_b}$?`;
    const solution = `$${diff}$%`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p17 DONE
function percentage_error(max_value = 100, min_value = -100) {
    let observed_value = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
    const exact_value = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);

    if (observed_value * exact_value < 0) {
        observed_value *= -1;
    }

    let error = (Math.abs(observed_value - exact_value) / Math.abs(exact_value)) * 100;
    error = Math.round(error * 100) / 100;

    const problem = `Find the percentage error when observed value equals $${observed_value}$ and exact value equals $${exact_value}$.`;
    const solution = `$${error}$%`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p18 DONE
function power_of_powers(max_base = 50, max_power = 10) {
    const base = Math.floor(Math.random() * max_base) + 1;
    const power1 = Math.floor(Math.random() * max_power) + 1;
    const power2 = Math.floor(Math.random() * max_power) + 1;
    const step = power1 * power2;

    const problem = `Simplify $${base}^{${power1}^{${power2}}}$`;
    const solution = `$${base}^{${step}}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p19 DONE
function square(max_square_num = 20) {
    const a = Math.floor(Math.random() * max_square_num) + 1;
    const b = a ** 2;

    return [`$${a}^2=$`, `$${b}$`];
}
///// Segment END

///// Segment BEGIN p20 DONE
function square_root(min_no = 1, max_no = 12) {
    let b = Math.floor(Math.random() * (max_no - min_no + 1) + min_no);
    let a = b ** 2;

    return [`$\\sqrt{${a}}=$`, `$${b}$`];
}
///// Segment END

///// Segment BEGIN p21 DONE
function simplify_square_root(max_variable = 100) {
    let x = Math.floor(Math.random() * max_variable) + 1;
    let y = x;
    let factors = {};
    let f = 2;
    while (x !== 1) {
        if (x % f === 0) {
            if (!(f in factors)) {
                factors[f] = 0;
            }
            factors[f] += 1;
            x /= f;
        } else {
            f += 1;
        }
    }
    let b = 1;
    let a = b;
    for (let i in factors) {
        if (factors[i] % 2 === 0) {
            a *= Math.pow(i, factors[i] / 2);
        } else {
            a *= Math.pow(i, (factors[i] - 1) / 2);
            b *= i;
        }
    }
    if (a === 1 || b === 1) {
        return simplify_square_root(max_variable);
    } else {
        return [`$\\sqrt{${y}}$`, `$${a}\\sqrt{${b}}$`];
    }
}
///// Segment END

///// Segment BEGIN p22 DONE
function subtraction(max_minuend = 99, max_diff = 99) {
  let a = Math.floor(Math.random() * (max_minuend + 1));
  let b = Math.floor(Math.random() * (a - Math.max(0, a - max_diff) + 1)) + Math.max(0, a - max_diff);
  let c = a - b;

  return [`$${a}-${b}=$`, `$${c}$`];
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
        [a, b] = absolute_difference();
        assert_equal(a, '$|-16-66|=$');
        assert_equal(b, '$82$');
    }
    test_p1();
    console.log('p1 passed');

    function test_p2() {
        var a, b;
        [a, b] = addition();
        assert_equal(a, '$15+14=$');
        assert_equal(b, '$29$');
    }
    test_p2();
    console.log('p2 passed');

    function test_p3() {
        var a, b;
        [a, b] = compare_fractions();
        assert_equal(a, 'Which symbol represents the comparison between $\\frac{10}{1}$ and $\\frac{5}{2}$?');
        assert_equal(b, '>');
    }
    test_p3();
    console.log('p3 passed');

    function test_p4() {
        var a, b;
        [a, b] = cube_root();
        assert_equal(a, 'What is the cube root of: $\\sqrt[3]{291}=$ to 2 decimal places?');
        assert_equal(b, '$6.63$');
    }
    test_p4();
    console.log('p4 passed');

    function test_p5() {
        var a, b;
        [a, b] = divide_fractions();
        assert_equal(a, '$\\frac{4}{5}\\div\\frac{3}{6}=$');
        assert_equal(b, '$\\frac{8}{5}$');
    }
    test_p5();
    console.log('p5 passed');

    function test_p6() {
    var a, b;
    [a, b] = division();
    assert_equal(a, '$414\\div23=$');
    assert_equal(b, '$18$');
    }
    test_p6();
    console.log('p6 passed');

    function test_p7() {
    var a, b;
    [a, b] = exponentiation();
    assert_equal(a, '$7^{6}=$');
    assert_equal(b, '$117649$');
    }
    test_p7();
    console.log('p7 passed');

    function test_p8() {
    var a, b;
    [a, b] = factorial();
    assert_equal(a, '$6! =$');
    assert_equal(b, '$720$');
    }
    test_p8();
    console.log('p8 passed');

    function test_p9() {
    var a, b;
    [a, b] = fraction_multiplication();
    assert_equal(a, '$\\frac{5}{8}\\cdot\\frac{4}{8}=$');
    assert_equal(b, '$\\frac{5}{16}$');
    }
    test_p9();
    console.log('p9 passed');

    function test_p10() {
    var a, b;
    [a, b] = fraction_to_decimal();
    assert_equal(a, '$37\\div40=$');
    assert_equal(b, '$0.93$');
    }
    test_p10();
    console.log('p10 passed');

    function test_p11() {
    var a, b;
    [a, b] = greatest_common_divisor();
    assert_equal(a, '$GCD(351,207)=$');
    assert_equal(b, '$9$');
    }
    test_p11();
    console.log('p11 passed');

    function test_p12() {
    var a, b;
    [a, b] = is_composite();
    assert_equal(a, 'Is $97$ composite?');
    assert_equal(b, 'No');
    }
    test_p12();
    console.log('p12 passed');

    function test_p13() {
    var a, b;
    [a, b] = is_prime();
    assert_equal(a, 'Is $92$ prime?');
    assert_equal(b, 'No');
    }
    test_p13();
    console.log('p13 passed');

    function test_p14() {
    var a, b;
    [a, b] = multiplication();
    assert_equal(a, '$11\\cdot10=$');
    assert_equal(b, '$110$');
    }
    test_p14();
    console.log('p14 passed');

    function test_p15() {
    var a, b;
    [a, b] = percentage();
    assert_equal(a, 'What is $53$% of $62$?');
    assert_equal(b, '$32.86$');
    }
    test_p15();
    console.log('p15 passed');

    function test_p16() {
    var a, b;
    [a, b] = percentage_difference();
    assert_equal(a, 'What is the percentage difference between $93$ and $96$?');
    assert_equal(b, '$3.17$%');
    }
    test_p16();
    console.log('p16 passed');

    function test_p17() {
    var a, b;
    [a, b] = percentage_error();
    assert_equal(a, 'Find the percentage error when observed value equals $-37$ and exact value equals $-91$.');
    assert_equal(b, '$59.34$%');
    }
    test_p17();
    console.log('p17 passed');

    function test_p18() {
    var a, b;
    [a, b] = power_of_powers();
    assert_equal(a, 'Simplify $42^{3^{5}}$');
    assert_equal(b, '$42^{15}$');
    }
    test_p18();
    console.log('p18 passed');

    function test_p19() {
    var a, b;
    [a, b] = square();
    assert_equal(a, '$6^2=$');
    assert_equal(b, '$36$');
    }
    test_p19();
    console.log('p19 passed');

    function test_p20() {
    var a, b;
    [a, b] = square_root();
    assert_equal(a, '$\\sqrt{36}=$');
    assert_equal(b, '$6$');
    }
    test_p20();
    console.log('p20 passed');

    function test_p21() {
    var a, b;
    [a, b] = simplify_square_root();
    assert_equal(a, '$\\sqrt{20}$');
    assert_equal(b, '$2\\sqrt{5}$');
    }
    test_p21();
    console.log('p21 passed');

    function test_p22() {
    var a, b;
    [a, b] = subtraction();
    assert_equal(a, '$59-3=$');
    assert_equal(b, '$56$');
    }
    test_p22();
    console.log('p22 passed');
}
test();
///// Segment IGNORE END