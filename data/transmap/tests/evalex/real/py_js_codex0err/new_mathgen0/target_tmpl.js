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

///// Segment BEGIN p13
///// Segment END

///// Segment BEGIN p14
///// Segment END

///// Segment BEGIN p15
///// Segment END

///// Segment BEGIN p16
///// Segment END

///// Segment BEGIN p17
///// Segment END

///// Segment BEGIN p18
///// Segment END

///// Segment BEGIN p19
///// Segment END

///// Segment BEGIN p20
///// Segment END

///// Segment BEGIN p21
///// Segment END

///// Segment BEGIN p22
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