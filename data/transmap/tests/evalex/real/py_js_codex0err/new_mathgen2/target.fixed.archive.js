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
function factorial(n){
  if(n < 0) return undefined;
  if(n == 0 || n == 1) return 1;
  var fac = 1;
  for(let i = 1;i <= n;i++){
      fac *= i;
  }
  return fac;
}
Math.factorial = factorial;

function combinations(max_lengthgth = 20) {
    const a = Math.floor(Math.random() * (max_lengthgth - 10 + 1) + 10);
    const b = Math.floor(Math.random() * 10);

    const solution = Math.floor(
        Math.factorial(a) / (Math.factorial(b) * Math.factorial(a - b))
    );

    const problem = `Find the number of combinations from $${a}$ objects picked $${b}$ at a time.`;
    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment BEGIN p2 DONE
function conditional_probability() {
    const P_disease = Math.round(2. * Math.random() * 100) / 100;
    const true_positive = Math.round(Math.random() * 100 + parseFloat(Math.floor(Math.random() * (99 - 90 + 1) + 90)) * 100) / 100;
    const true_negative = Math.round(Math.random() * 100 + parseFloat(Math.floor(Math.random() * (99 - 90 + 1) + 90)) * 100) / 100;

    function BayesFormula(P_disease, true_positive, true_negative) {
        const P_notDisease = 100. - P_disease;
        const false_positive = 100. - true_negative;
        const P_plus = (P_disease) * (true_positive) + (P_notDisease) * (false_positive);
        const P_disease_plus = ((true_positive) * (100 * P_disease)) / P_plus;

        return P_disease_plus;
    }

    const answer = Math.round(BayesFormula(P_disease, true_positive, true_negative) * 100) / 100;

    const problem = `Someone tested positive for a nasty disease which only $${P_disease.toFixed(2)}$% of the population have. Test sensitivity (true positive) is equal to $SN=${true_positive.toFixed(2)}$% whereas test specificity (true negative) $SP=${true_negative.toFixed(2)}$%. What is the probability that this guy really has that disease?`;
    const solution = `$${answer.toFixed(2)}$%`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p3 DONE
function confidence_interval() {
    const n = Math.floor(Math.random() * (40 - 20 + 1) + 20);
    const j = Math.floor(Math.random() * 4);

    const lst = Array.from({length: n}, () => Math.floor(Math.random() * (300 - 200 + 1) + 200));
    const lst_per = [80, 90, 95, 99];
    const lst_t = [1.282, 1.645, 1.960, 2.576];

    let mean = 0;
    let sd = 0;

    for (let i of lst) {
        let count = i + mean;
        mean = count;
    }

    mean = mean / n;

    for (let i of lst) {
        let x = (i - mean)**2 + sd;
        sd = x;
    }

    sd = sd / n;
    const standard_error = lst_t[j] * Math.sqrt(sd / n);
    const upper = Math.round((mean + standard_error) * 100) / 100;
    const lower = Math.round((mean - standard_error) * 100) / 100;

    const problem = `The confidence interval for sample $[${lst}]$ with $${lst_per[j]}$% confidence is`;
    const solution = `$(${upper}, ${lower})$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p4 DONE
function data_summary(number_values = 15, min_val = 5, max_val = 50) {
    let random_list = [];

    for (let i = 0; i < number_values; i++) {
        let n = Math.floor(Math.random() * (max_val - min_val + 1) + min_val);
        random_list.push(n);
    }

    let a = random_list.reduce((acc, val) => acc + val, 0);
    let mean = parseFloat((a / number_values).toFixed(2));

    let _var = 0;
    for (let i = 0; i < number_values; i++) {
        _var += Math.pow((random_list[i] - mean), 2);
    }

    let standardDeviation = parseFloat((_var / number_values).toFixed(2));
    let variance = parseFloat(Math.sqrt(_var / number_values).toFixed(2));

    let problem = `Find the mean,standard deviation and variance for the data $${random_list.join(", ")}$`;
    let solution = `The Mean is $${mean}$, Standard Deviation is $${standardDeviation}$, Variance is $${variance}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p5 DONE
function dice_sum_probability(max_dice = 3) {
    let a = Math.floor(Math.random() * max_dice) + 1;
    let b = Math.floor(Math.random() * (6 * a - a + 1)) + a;

    let count = 0;
    for (let i = 1; i <= 6; i++) {
        if (a === 1) {
            if (i === b) {
                count++;
            }
        } else if (a === 2) {
            for (let j = 1; j <= 6; j++) {
                if (i + j === b) {
                    count++;
                }
            }
        } else if (a === 3) {
            for (let j = 1; j <= 6; j++) {
                for (let k = 1; k <= 6; k++) {
                    if (i + j + k === b) {
                        count++;
                    }
                }
            }
        }
    }

    let problem = `If $${a}$ dice are rolled at the same time, the probability of getting a sum of $${b} =$`;
    let solution = `\\frac{${count}}{${6 ** a}}`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p6 DONE
function meanMedian(max_length = 10) {
    const randomlist = Array.from({length: max_length}, () => Math.floor(Math.random() * 99) + 1);
    let total = 0;
    for (let n of randomlist) {
        total += n;
    }
    const mean = total / 10;
    randomlist.sort((a, b) => a - b);
    const median = (randomlist[4] + randomlist[5]) / 2;

    const problem = `Given the series of numbers $[${randomlist}]$. Find the arithmatic mean and median of the series`;
    const solution = `Arithmetic mean of the series is $${mean}$ and arithmetic median of this series is $${median}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p7 DONE
function permutation(max_lengthgth = 20) {
  const a = Math.floor(Math.random() * (max_lengthgth - 10 + 1) + 10);
  const b = Math.floor(Math.random() * 10);
  const solution = parseInt(Math.factorial(a) / (Math.factorial(a - b)));

  const problem = `Number of Permutations from $${a}$ objects picked $${b}$ at a time is: `;
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