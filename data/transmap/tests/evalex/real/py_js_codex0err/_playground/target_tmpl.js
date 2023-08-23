///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END

///// Segment BEGIN my_first_segment
///// Segment END

///// Segment BEGIN my_second_segment
///// Segment END

///// Segment IGNORE BEGIN
function assertEqual(a, b) {
  if (a !== b) {
      throw new Error("MyLogError MISMATCH");
  }
}

function assertAlmostEqual(a, b) {
  if (Math.abs(a - b) > 0.0001) {
      throw new Error("MyLogError MISMATCH");
  }
}

function assertIterAlmostEqual(iter1, iter2) {
  iter1 = Array.from(iter1);
  iter2 = Array.from(iter2);
  console.log("[assertIterAlmostEqual] ", iter1, " and ", iter2);
  if (iter1.length !== iter2.length) {
      throw new Error("MyLogError MISMATCH");
  }
  for (let i = 0; i < iter1.length; i++) {
      assertAlmostEqual(iter1[i], iter2[i]);
  }
}

function test() {
  assertIterAlmostEqual(generate_square_list(5), [0, 1, 4, 9, 16]);
  // assertIterAlmostEqual(accumulate_list([1, 2, 3, 4, 5]), [1, 3, 6, 10, 15]);
}

test();
///// Segment IGNORE END