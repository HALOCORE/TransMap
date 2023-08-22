///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END

///// Segment BEGIN yiqrgb
///// Segment END

///// Segment BEGIN rgbhls
///// Segment END

///// Segment BEGIN rgbhsv
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
  for (let i = 0; i < iter1.length; i++) {
      assertAlmostEqual(iter1[i], iter2[i]);
  }
}

function testRgbToYiq() {
  assertIterAlmostEqual(rgbToYiq(0.5, 0.5, 0.5), [0.5, 0.0, 0.0]);
}

function testYiqToRgb() {
  assertIterAlmostEqual(yiqToRgb(0.5, 0.0, 0.0), [0.5, 0.5, 0.5]);
}

function testRgbToHls() {
  assertIterAlmostEqual(rgbToHls(0.5, 0.5, 0.5), [0.0, 0.5, 0.0]);
}

function testHlsToRgb() {
  assertIterAlmostEqual(hlsToRgb(0.0, 0.5, 0.0), [0.5, 0.5, 0.5]);
}

function testRgbToHsv() {
  assertIterAlmostEqual(rgbToHsv(0.5, 0.5, 0.5), [0.0, 0.0, 0.5]);
}

function testHsvToRgb() {
  assertIterAlmostEqual(hsvToRgb(0.0, 0.0, 0.5), [0.5, 0.5, 0.5]);
}

function test() {
  testRgbToYiq();
  testYiqToRgb();
  testRgbToHls();
  testHlsToRgb();
  testRgbToHsv();
  testHsvToRgb();
}

test();
///// Segment IGNORE END