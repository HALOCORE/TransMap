///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END

///// Segment BEGIN yiqrgb DONE
const ONE_THIRD = 1.0/3.0;
const ONE_SIXTH = 1.0/6.0;
const TWO_THIRD = 2.0/3.0;

function rgb_to_yiq(r, g, b) {
    const y = 0.30*r + 0.59*g + 0.11*b;
    const i = 0.74*(r-y) - 0.27*(b-y);
    const q = 0.48*(r-y) + 0.41*(b-y);
    return [y, i, q];
}

function yiq_to_rgb(y, i, q) {
    let r = y + 0.9468822170900693*i + 0.6235565819861433*q;
    let g = y - 0.27478764629897834*i - 0.6356910791873801*q;
    let b = y - 1.1085450346420322*i + 1.7090069284064666*q;

    if (r < 0.0) {
        r = 0.0;
    }
    if (g < 0.0) {
        g = 0.0;
    }
    if (b < 0.0) {
        b = 0.0;
    }
    if (r > 1.0) {
        r = 1.0;
    }
    if (g > 1.0) {
        g = 1.0;
    }
    if (b > 1.0) {
        b = 1.0;
    }
    return [r, g, b];
}
///// Segment END

///// Segment BEGIN rgbhls DONE
const ONE_THIRD = 1.0 / 3.0;
const ONE_SIXTH = 1.0 / 6.0;
const TWO_THIRD = 2.0 / 3.0;

function rgb_to_hls(r, g, b) {
    const maxc = Math.max(r, g, b);
    const minc = Math.min(r, g, b);
    const sumc = (maxc + minc);
    const rangec = (maxc - minc);
    const l = sumc / 2.0;
    if (minc === maxc) {
        return [0.0, l, 0.0];
    }
    let s;
    if (l <= 0.5) {
        s = rangec / sumc;
    } else {
        s = rangec / (2.0 - sumc);
    }
    const rc = (maxc - r) / rangec;
    const gc = (maxc - g) / rangec;
    const bc = (maxc - b) / rangec;
    let h;
    if (r === maxc) {
        h = bc - gc;
    } else if (g === maxc) {
        h = 2.0 + rc - bc;
    } else {
        h = 4.0 + gc - rc;
    }
    h = (h / 6.0) % 1.0;
    return [h, l, s];
}

function hls_to_rgb(h, l, s) {
    if (s === 0.0) {
        return [l, l, l];
    }
    let m2;
    if (l <= 0.5) {
        m2 = l * (1.0 + s);
    } else {
        m2 = l + s - (l * s);
    }
    const m1 = 2.0 * l - m2;
    return [_v(m1, m2, h + ONE_THIRD), _v(m1, m2, h), _v(m1, m2, h - ONE_THIRD)];
}

function _v(m1, m2, hue) {
    hue = hue % 1.0;
    if (hue < ONE_SIXTH) {
        return m1 + (m2 - m1) * hue * 6.0;
    }
    if (hue < 0.5) {
        return m2;
    }
    if (hue < TWO_THIRD) {
        return m1 + (m2 - m1) * (TWO_THIRD - hue) * 6.0;
    }
    return m1;
}
///// Segment END

///// Segment BEGIN rgbhsv DONE
function rgb_to_hsv(r, g, b) {
    let maxc = Math.max(r, g, b);
    let minc = Math.min(r, g, b);
    let rangec = (maxc - minc);
    let v = maxc;
    if (minc === maxc) {
        return [0.0, 0.0, v];
    }
    let s = rangec / maxc;
    let rc = (maxc - r) / rangec;
    let gc = (maxc - g) / rangec;
    let bc = (maxc - b) / rangec;
    let h;
    if (r === maxc) {
        h = bc - gc;
    } else if (g === maxc) {
        h = 2.0 + rc - bc;
    } else {
        h = 4.0 + gc - rc;
    }
    h = (h / 6.0) % 1.0;
    return [h, s, v];
}

function hsv_to_rgb(h, s, v) {
    if (s === 0.0) {
        return [v, v, v];
    }
    let i = parseInt(h * 6.0);
    let f = (h * 6.0) - i;
    let p = v * (1.0 - s);
    let q = v * (1.0 - s * f);
    let t = v * (1.0 - s * (1.0 - f));
    i = i % 6;
    if (i === 0) {
        return [v, t, p];
    }
    if (i === 1) {
        return [q, v, p];
    }
    if (i === 2) {
        return [p, v, t];
    }
    if (i === 3) {
        return [p, q, v];
    }
    if (i === 4) {
        return [t, p, v];
    }
    if (i === 5) {
        return [v, p, q];
    }
    // Cannot get here
}
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