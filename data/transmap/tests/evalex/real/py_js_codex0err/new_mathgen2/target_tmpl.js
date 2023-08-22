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

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
  if (a != b) {
      throw Error("MyLogError MISMATCH");
  }
}

function test() {
  function test_p1() {
    var a, b;
    [a, b] = combinations();
    assert_equal(a, 'Find the number of combinations from $14$ objects picked $8$ at a time.');
    assert_equal(b, '$3003$');
  }
  test_p1();
  console.log('p1 passed');

  function test_p2() {
    var a, b;
    [a, b] = conditional_probability();
    assert_equal(a, 'Someone tested positive for a nasty disease which only $0.61$% of the population have. Test sensitivity (true positive) is equal to $SN=99.29$% whereas test specificity (true negative) $SP=94.91$%. What is the probability that this guy really has that disease?');
    assert_equal(b, '$10.69$%');
  }
  test_p2();
  console.log('p2 passed');

  function test_p3() {
    var a, b;
    [a, b] = confidence_interval();
    assert_equal(a, 'The confidence interval for sample $[229,231,242,225,252,290,270,227,231,258,296,243,247,232,276,272,237,240,235,220,238,292,289]$ with $80$% confidence is');
    assert_equal(b, '$(257.29, 244.62)$');
  }
  test_p3();
  console.log('p3 passed');

  function test_p4() {
    var a, b;
    [a, b] = data_summary();
    assert_equal(a, 'Find the mean,standard deviation and variance for the data $40, 29, 33, 26, 26, 36, 7, 43, 16, 25, 17, 25, 28, 11, 13$');
    assert_equal(b, 'The Mean is $25$, Standard Deviation is $104.67$, Variance is $10.23$');
  }
  test_p4();
  console.log('p4 passed');

  function test_p5() {
    var a, b;
    [a, b] = dice_sum_probability();
    assert_equal(a, 'If $2$ dice are rolled at the same time, the probability of getting a sum of $2 =$');
    assert_equal(b, '\\frac{1}{36}');
  }
  test_p5();
  console.log('p5 passed');

  function test_p6() {
    var a, b;
    [a, b] = meanMedian();
    assert_equal(a, 'Given the series of numbers $[2,2,11,16,19,25,26,38,46,78]$. Find the arithmatic mean and median of the series');
    assert_equal(b, 'Arithmetic mean of the series is $26.3$ and arithmetic median of this series is $22$');
  }
  test_p6();
  console.log('p6 passed');

  function test_p7() {
    var a, b;
    [a, b] = permutation();
    assert_equal(a, 'Number of Permutations from $12$ objects picked $8$ at a time is: ');
    assert_equal(b, '$19958400$');
  }
  test_p7();
  console.log('p7 passed');
}
test();
///// Segment IGNORE END