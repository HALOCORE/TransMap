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
function angle_btw_vectors(max_elt_amt = 20) {
    let s = 0;
    let v1 = Array.from({length: Math.floor(Math.random() * (max_elt_amt - 2 + 1) + 2)}, () => parseFloat((Math.random() * 1000).toFixed(2)));
    let v2 = v1.map(i => parseFloat((Math.random() * 1000).toFixed(2)));
    for (let i = 0; i < v1.length; i++) {
        s += v1[i] * v2[i];
    }

    let mags = Math.sqrt(v1.reduce((acc, i) => acc + i**2, 0)) * Math.sqrt(v2.reduce((acc, i) => acc + i**2, 0));
    let solution = '';
    let ans = 0;
    try {
        ans = parseFloat((Math.acos(s / mags)).toFixed(2));
        solution = `$${ans}$ radians`;
    } catch (e) {
        console.log('angleBtwVectorsFunc has some issues with math module, line 16');
        solution = 'NaN';
        ans = 'NaN';
    }
    let problem = `angle between the vectors $[${v1}]$ and $[${v2}]$ is:`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p2 DONE
function angle_regular_polygon(min_val=3, max_val=20) {
    let sideNum = Math.floor(Math.random() * (max_val - min_val + 1) + min_val);
    let problem = `Find the angle of a regular polygon with $${sideNum}$ sides`;

    let exteriorAngle = parseFloat((360 / sideNum).toFixed(2));
    let solution = `$${(180 - exteriorAngle).toFixed(1)}$`;

    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p3 DONE
function arc_length(max_radius = 49, max_angle = 359) {
    const radius = Math.floor(Math.random() * max_radius) + 1;
    const angle = Math.floor(Math.random() * max_angle) + 1;
    const angle_arc_length = parseFloat((angle / 360) * 2 * Math.PI * radius);
    const formatted_float = angle_arc_length.toFixed(5);

    const problem = `Given radius, $${radius}$ and angle, $${angle}$. Find the arc length of the angle.`;
    const solution = `Arc length of the angle $= ${formatted_float}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p4 DONE
function area_of_circle(max_radius = 100) {
    const r = Math.floor(Math.random() * (max_radius + 1));
    const area = +(Math.PI * r * r).toFixed(2);

    const problem = `Area of circle with radius $${r}=$`;
    return [problem, `$${area}$`];
}
///// Segment END

///// Segment BEGIN p5 DONE
function area_of_circle_given_center_and_point(max_coordinate = 10, max_radius = 10) {
    const r = Math.floor(Math.random() * (max_radius + 1));
    const center_x = Math.floor(Math.random() * (2 * max_coordinate + 1)) - max_coordinate;
    const center_y = Math.floor(Math.random() * (2 * max_coordinate + 1)) - max_coordinate;

    const angle = Math.floor([0, Math.PI / 6, Math.PI / 2, Math.PI, Math.PI + Math.PI / 6, 3 * Math.PI / 2][Math.floor(Math.random() * 6)]);

    const point_x = center_x + Math.round(r * Math.cos(angle) * 100) / 100;
    const point_y = center_y + Math.round(r * Math.sin(angle) * 100) / 100;

    const area = Math.round(Math.PI * r * r * 100) / 100;

    const problem = `Area of circle with center $(${center_x},${center_y})$ and passing through $(${point_x}, ${point_y})$ is`;
    return [problem, `$${area}$`];
}
///// Segment END

///// Segment BEGIN p6 DONE
function area_of_triangle(max_a = 20, max_b = 20) {
    const a = Math.floor(Math.random() * max_a) + 1;
    const b = Math.floor(Math.random() * max_b) + 1;
    const c = Math.floor(Math.random() * (Math.abs(b - a) + 1)) + Math.min(a, b) + 1;

    const s = (a + b + c) / 2;
    const area = Math.pow(s * (s - a) * (s - b) * (s - c), 0.5);

    const problem = `Area of triangle with side lengths: $${a}, ${b}, ${c} = $`;
    const solution = `$${area.toFixed(2)}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p7 DONE
function circumference(max_radius = 100) {
    const r = Math.floor(Math.random() * (max_radius + 1));
    const circumference = parseFloat((2 * Math.PI * r).toFixed(2));

    const problem = `Circumference of circle with radius $${r} = $`;
    return [problem, `$${circumference}$`];
}
///// Segment END

///// Segment BEGIN p8 DONE
function complementary_and_supplementary_angle(max_supp = 180, max_comp = 90) {
    let angleType = Math.random() < 0.5 ? "supplementary" : "complementary";
    let angle, angleAns;

    if (angleType === "supplementary") {
        angle = Math.floor(Math.random() * (max_supp - 1 + 1)) + 1;
        angleAns = 180 - angle;
    } else {
        angle = Math.floor(Math.random() * (max_comp - 1 + 1)) + 1;
        angleAns = 90 - angle;
    }

    let problem = `The ${angleType} angle of $${angle} =$`;
    let solution = `$${angleAns}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p9 DONE
function curved_surface_area_cylinder(max_radius = 49, max_height = 99) {
    const r = Math.floor(Math.random() * max_radius) + 1;
    const h = Math.floor(Math.random() * max_height) + 1;
    const csa = parseFloat(2 * Math.PI * r * h);
    const formatted_float = Math.round(csa * 100) / 100; // parseFloat(csa.toFixed(2))

    const problem = `What is the curved surface area of a cylinder of radius, $${r}$ and height, $${h}$?`;
    const solution = `$${formatted_float}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p10 DONE
function degree_to_rad(max_deg = 360) {
    const a = Math.floor(Math.random() * (max_deg + 1));
    let b = (Math.PI * a) / 180;
    b = Math.floor(b * 100) / 100;

    const problem = `Angle $${a}$ degrees in radians is: `;
    const solution = `$${b}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p11 DONE
function equation_of_line_from_two_points(max_coordinate = 20, min_coordinate = -20) {
    let x1 = Math.floor(Math.random() * (max_coordinate - min_coordinate + 1) + min_coordinate);
    let x2 = Math.floor(Math.random() * (max_coordinate - min_coordinate + 1) + min_coordinate);
    let y1 = Math.floor(Math.random() * (max_coordinate - min_coordinate + 1) + min_coordinate);
    let y2 = Math.floor(Math.random() * (max_coordinate - min_coordinate + 1) + min_coordinate);

    let coeff_y = (x2 - x1);
    let coeff_x = (y2 - y1);
    let constant = y2 * coeff_y - x2 * coeff_x;

    let gcd = Math.abs(gcd_two_numbers(coeff_x, coeff_y));

    if (gcd != 1) {
        if (coeff_y > 0) {
            coeff_y = Math.floor(coeff_y / gcd);
        }
        if (coeff_x > 0) {
            coeff_x = Math.floor(coeff_x / gcd);
        }
        if (constant > 0) {
            constant = Math.floor(constant / gcd);
        }
        if (coeff_y < 0) {
            coeff_y = -Math.floor(-coeff_y / gcd);
        }
        if (coeff_x < 0) {
            coeff_x = -Math.floor(-coeff_x / gcd);
        }
        if (constant < 0) {
            constant = -Math.floor(-constant / gcd);
        }
    }
    if (coeff_y < 0) {
        coeff_y = -(coeff_y);
        coeff_x = -(coeff_x);
        constant = -(constant);
    }
    if (coeff_x == 1 || coeff_x == -1) {
        if (coeff_x == 1) {
            coeff_x = '';
        } else {
            coeff_x = '-';
        }
    }
    if (coeff_y == 1 || coeff_y == -1) {
        if (coeff_y == 1) {
            coeff_y = '';
        } else {
            coeff_y = '-';
        }
    }

    let problem = `What is the equation of the line between points $(${x1},${y1})$ and $(${x2},${y2})$ in slope-intercept form?`;
    let solution = '';
    if (coeff_x == 0) {
        solution = `${coeff_y}y = ${constant}`;
    } else if (coeff_y == 0) {
        solution = `${coeff_x}x = ${-constant}`;
    } else {
        if (constant > 0) {
            solution = `${coeff_y}y = ${coeff_x}x + ${constant}`;
        } else {
            solution = `${coeff_y}y = ${coeff_x}x ${constant}`;
        }
    }
    return [problem, `$${solution}$`];
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}
///// Segment END

///// Segment BEGIN p12 DONE
function fourth_angle_of_quadrilateral(max_angle = 180) {
    const angle1 = Math.floor(Math.random() * max_angle) + 1;
    const angle2 = Math.floor(Math.random() * (240 - angle1)) + 1;
    const angle3 = Math.floor(Math.random() * (340 - (angle1 + angle2))) + 1;

    const sum_ = angle1 + angle2 + angle3;
    const angle4 = 360 - sum_;

    const problem = `Fourth angle of quadrilateral with angles $${angle1} , ${angle2}, ${angle3} =$`;
    const solution = `$${angle4}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p13 DONE
function pythagorean_theorem(max_length = 20) {
    const a = Math.floor(Math.random() * max_length) + 1;
    const b = Math.floor(Math.random() * max_length) + 1;
    const c = Math.round(Math.sqrt(a ** 2 + b ** 2) * 100) / 100;

    const problem = `What is the hypotenuse of a right triangle given the other two sides have lengths $${a}$ and $${b}$?`;
    const solution = `$${c}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p14 DONE
function radian_to_deg(max_rad = 6.28) {
    const a = Math.floor(Math.random() * (max_rad * 100)) / 100;
    const b = Math.round((180 * a) / Math.PI * 100) / 100;

    const problem = `Angle $${a}$ radians in degrees is: `;
    const solution = `$${b}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p15 DONE
function sector_area(max_radius = 49, max_angle = 359) {
    const r = Math.floor(Math.random() * max_radius) + 1;
    const a = Math.floor(Math.random() * max_angle) + 1;
    const secArea = parseFloat((a / 360) * Math.PI * r * r);
    const formatted_float = Math.round(secArea * 100) / 100;

    const problem = `What is the area of a sector with radius $${r}$ and angle $${a}$ degrees?`;
    const solution = `$${formatted_float}$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p16 DONE
function sum_of_polygon_angles(max_sides=12) {
    const side_count = Math.floor(Math.random() * (max_sides - 3 + 1) + 3);
    const sum = (side_count - 2) * 180;

    const problem = `What is the sum of interior angles of a polygon with $${side_count}$ sides?`;
    return [problem, `$${sum}$`];
}
///// Segment END

///// Segment BEGIN p17 DONE
function surface_area_cone(max_radius=20, max_height=50, unit='m') {
    const a = Math.floor(Math.random() * max_height) + 1;
    const b = Math.floor(Math.random() * max_radius) + 1;

    const slopingHeight = Math.sqrt(a**2 + b**2);
    const ans = parseInt(Math.PI * b * slopingHeight + Math.PI * b * b);

    const problem = `Surface area of cone with height $= ${a}${unit}$ and radius $= ${b}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p18 DONE
function surface_area_cube(max_side = 20, unit = 'm') {
    const a = Math.floor(Math.random() * max_side) + 1;
    const ans = 6 * (a ** 2);

    const problem = `Surface area of cube with side $= ${a}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p19 DONE
function surface_area_cuboid(max_side = 20, unit = 'm') {
    const a = Math.floor(Math.random() * max_side) + 1;
    const b = Math.floor(Math.random() * max_side) + 1;
    const c = Math.floor(Math.random() * max_side) + 1;
    const ans = 2 * (a * b + b * c + c * a);

    const problem = `Surface area of cuboid with sides of lengths: $${a}${unit}, ${b}${unit}, ${c}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p20 DONE
function surface_area_cylinder(max_radius = 20, max_height = 50, unit = 'm') {
    const a = Math.floor(Math.random() * max_height) + 1;
    const b = Math.floor(Math.random() * max_radius) + 1;
    const ans = Math.floor(2 * Math.PI * a * b + 2 * Math.PI * b * b);

    const problem = `Surface area of cylinder with height $= ${a}${unit}$ and radius $= ${b}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p21 DONE
function surface_area_pyramid(unit = 'm') {
    const _PYTHAGOREAN = [
        [3, 4, 5],
        [6, 8, 10],
        [9, 12, 15],
        [12, 16, 20],
        [15, 20, 25],
        [5, 12, 13],
        [10, 24, 26],
        [7, 24, 25]
    ];

    let random_list = [..._PYTHAGOREAN[Math.floor(Math.random() * _PYTHAGOREAN.length)]];
    let sampled_list = [];
    for (var i=0;i < 3;i++) {
      const index = Math.floor(Math.random() * random_list.length);
      sampled_list.push(random_list[index]);
      random_list.splice(index, 1);
    }
    const [height, half_width, triangle_height_1] = sampled_list;

    const triangle_1 = half_width * triangle_height_1;

    const second_triplet_prechoice = _PYTHAGOREAN.filter(i => i.includes(height));
    const second_triplet = second_triplet_prechoice[Math.floor(Math.random() * second_triplet_prechoice.length)];
    random_list = [...second_triplet.filter(i => i !== height)];
    sampled_list = [];
    for (var i=0;i < 2;i++) {
      const index = Math.floor(Math.random() * random_list.length);
      sampled_list.push(random_list[index]);
      random_list.splice(index, 1);
    }
    const [half_length, triangle_height_2] = sampled_list;

    const triangle_2 = half_length * triangle_height_2;

    const base = 4 * half_width * half_length;

    const ans = base + 2 * triangle_1 + 2 * triangle_2;

    const problem = `Surface area of pyramid with base length $= ${2 * half_length}${unit}$, base width $= ${2 * half_width}${unit}$, and height $= ${height}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p22 DONE
function surface_area_sphere(max_side = 20, unit = 'm') {
    const r = Math.floor(Math.random() * max_side) + 1;
    const ans = parseFloat((4 * Math.PI * r * r).toFixed(2));

    const problem = `Surface area of a sphere with radius $= ${r}${unit}$ is`;
    const solution = `$${ans} ${unit}^2$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p23 DONE
function third_angle_of_triangle(max_angle = 89) {
    const angle1 = Math.floor(Math.random() * (max_angle)) + 1;
    const angle2 = Math.floor(Math.random() * (max_angle)) + 1;
    const angle3 = 180 - (angle1 + angle2);

    const problem = `Third angle of triangle with angles $${angle1}$ and $${angle2} = $`;
    return [problem, `$${angle3}$`];
}
///// Segment END

///// Segment BEGIN p24 DONE
function valid_triangle(max_side_length = 50) {
    const sideA = Math.floor(Math.random() * max_side_length) + 1;
    const sideB = Math.floor(Math.random() * max_side_length) + 1;
    const sideC = Math.floor(Math.random() * max_side_length) + 1;

    const sideSums = [sideA + sideB, sideB + sideC, sideC + sideA];
    const sides = [sideC, sideA, sideB];

    const exists = true && (sides[0] < sideSums[0]) & (sides[1] < sideSums[1]) && (sides[2] < sideSums[2]);

    const problem = `Does triangle with sides $${sideA}, ${sideB}$ and $${sideC}$ exist?`;
    const solution = exists ? "Yes" : "No";
    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment BEGIN p25 DONE
function volume_cone(max_radius = 20, max_height = 50, unit = 'm') {
    const a = Math.floor(Math.random() * max_height) + 1;
    const b = Math.floor(Math.random() * max_radius) + 1;
    const ans = Math.floor(Math.PI * b * b * a * (1 / 3));

    const problem = `Volume of cone with height $= ${a}${unit}$ and radius $= ${b}${unit}$ is`;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p26 DONE
function volume_cube(max_side=20, unit='m') {
    const a = Math.floor(Math.random() * max_side) + 1;
    const ans = a ** 3;

    const problem = `Volume of cube with a side length of $${a}${unit}$ is`;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p27 DONE
function volume_cuboid(max_side=20, unit='m') {
    const a = Math.floor(Math.random() * max_side) + 1;
    const b = Math.floor(Math.random() * max_side) + 1;
    const c = Math.floor(Math.random() * max_side) + 1;
    const ans = a * b * c;

    const problem = `Volume of cuboid with sides = $${a}${unit}, ${b}${unit}, ${c}${unit}$ is`;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p28 DONE
function volume_cylinder(max_radius=20, max_height=50, unit='m') {
    const a = Math.floor(Math.random() * max_height) + 1;
    const b = Math.floor(Math.random() * max_radius) + 1;
    const ans = Math.floor(Math.PI * b * b * a);

    const problem = `Volume of cylinder with height $= ${a}${unit}$ and radius $= ${b}${unit}$ is`;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p29 DONE
function volume_cone_frustum(max_r1 = 20, max_r2 = 20, max_height = 50, unit = 'm') {
    const h = Math.floor(Math.random() * max_height) + 1;
    const r1 = Math.floor(Math.random() * max_r1) + 1;
    const r2 = Math.floor(Math.random() * max_r2) + 1;
    const ans = parseFloat((((Math.PI * h) * (r1 ** 2 + r2 ** 2 + r1 * r2)) / 3).toFixed(2));

    const problem = `Volume of frustum with height $= ${h}${unit}$ and $r1 = ${r1}${unit}$ is and $r2 = ${r2}${unit}$ is `;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p30 DONE
function volume_hemisphere(max_radius = 100) {
    const r = Math.floor(Math.random() * max_radius) + 1;
    const ans = Math.round(parseFloat((2 * Math.PI / 3) * Math.pow(r, 3)) * 100) / 100;

    const problem = `Volume of hemisphere with radius $${r} m =$ `;
    const solution = `$${ans} m^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p31 DONE
function volume_pyramid(max_length=20, max_width=20, max_height=50, unit='m') {
    const length = Math.floor(Math.random() * max_length) + 1;
    const width = Math.floor(Math.random() * max_width) + 1;
    const height = Math.floor(Math.random() * max_height) + 1;

    const ans = parseFloat(((length * width * height) / 3).toFixed(2));

    const problem = `Volume of pyramid with base length $= ${length} ${unit}$, base width $= ${width} ${unit}$ and height $= ${height} ${unit}$ is`;
    const solution = `$${ans} ${unit}^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p32 DONE
function volume_sphere(max_radius = 100) {
    const r = Math.floor(Math.random() * max_radius) + 1;
    const ans = Math.round(parseFloat((4 * Math.PI / 3) * Math.pow(r, 3)) * 100) / 100;

    const problem = `Volume of sphere with radius $${r} m = $`;
    const solution = `$${ans} m^3$`;
    return [problem, solution];
}
///// Segment END

///// Segment BEGIN p33 DONE
function perimeter_of_polygons(max_sides = 12, max_length = 120) {
    const size_of_sides = Math.floor(Math.random() * (max_sides - 3 + 1) + 3);
    const sides = Array.from({length: size_of_sides}, () => Math.floor(Math.random() * max_length) + 1);

    const problem = `The perimeter of a $${size_of_sides}$ sided polygon with lengths of $${sides.join(', ')}$cm is: `;
    const solution = sides.reduce((acc, curr) => acc + curr, 0);

    return [problem, `$${solution}$`];
}
///// Segment END

///// Segment IGNORE BEGIN
function assertEqual(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}
  
function test() {
  function test_p1() {
    var result = angle_btw_vectors();
    assertEqual(result[0], 'angle between the vectors $[829.89,304.8,293.49,934.28,906.11,472.69,173.37,99,290.11]$ and $[311.65,419.22,249.45,520.14,899.08,693.34,270.07,307.76,578.14]$ is:');
    assertEqual(result[1], '$0.49$ radians');
  }
  test_p1();
  console.log("p1 passed");

  function test_p2() {
    var result = angle_regular_polygon();
    assertEqual(result[0], 'Find the angle of a regular polygon with $20$ sides');
    assertEqual(result[1], '$162.0$');
  }
  test_p2();
  console.log("p2 passed");

  function test_p3() {
    var result = arc_length();
    assertEqual(result[0], 'Given radius, $22$ and angle, $169$. Find the arc length of the angle.');
    assertEqual(result[1], 'Arc length of the angle $= 64.89134$');
  }
  test_p3();
  console.log("p3 passed");

  function test_p4() {
      var result = area_of_circle();
      assertEqual(result[0], 'Area of circle with radius $32=$');
      assertEqual(result[1], '$3216.99$');
  }
  test_p4();
  console.log("p4 passed");

  function test_p5() {
      var result = area_of_circle_given_center_and_point();
      assertEqual(result[0], 'Area of circle with center $(5,-3)$ and passing through $(9.32, 3.7300000000000004)$ is');
      assertEqual(result[1], '$201.06$');
  }
  test_p5();
  console.log("p5 passed");

  function test_p6() {
      var result = area_of_triangle();
      assertEqual(result[0], 'Area of triangle with side lengths: $8, 5, 7 = $');
      assertEqual(result[1], '$17.32$');
  }
  test_p6();
  console.log("p6 passed");

  function test_p7() {
      var result = circumference();
      assertEqual(result[0], 'Circumference of circle with radius $92 = $');
      assertEqual(result[1], '$578.05$');
  }
  test_p7();
  console.log("p7 passed");

  function test_p8() {
      var result = complementary_and_supplementary_angle();
      assertEqual(result[0], 'The complementary angle of $70 =$');
      assertEqual(result[1], '$20$');
  }
  test_p8();
  console.log("p8 passed");

  function test_p9() {
      var result = curved_surface_area_cylinder();
      assertEqual(result[0], 'What is the curved surface area of a cylinder of radius, $26$ and height, $62$?');
      assertEqual(result[1], '$10128.49$');
  }
  test_p9();
  console.log("p9 passed");

  function test_p10() {
      var result = degree_to_rad();
      assertEqual(result[0], 'Angle $167$ degrees in radians is: ');
      assertEqual(result[1], '$2.91$');
  }
  test_p10();
  console.log("p10 passed");

  function test_p11() {
      var result = equation_of_line_from_two_points();
      assertEqual(result[0], 'What is the equation of the line between points $(-1,-19)$ and $(7,14)$ in slope-intercept form?');
      assertEqual(result[1], '$8y = 33x -119$');
  }
  test_p11();
  console.log("p11 passed");

  function test_p12() {
      var result = fourth_angle_of_quadrilateral();
      assertEqual(result[0], 'Fourth angle of quadrilateral with angles $44 , 89, 56 =$');
      assertEqual(result[1], '$171$');
  }
  test_p12();
  console.log("p12 passed");

  function test_p13() {
      var result = pythagorean_theorem();
      assertEqual(result[0], 'What is the hypotenuse of a right triangle given the other two sides have lengths $9$ and $11$?');
      assertEqual(result[1], '$14.21$');
  }
  test_p13();
  console.log("p13 passed");

  function test_p14() {
      var result = radian_to_deg();
      assertEqual(result[0], 'Angle $0.93$ radians in degrees is: ');
      assertEqual(result[1], '$53.29$');
  }
  test_p14();
  console.log("p14 passed");

  function test_p15() {
      var result = sector_area();
      assertEqual(result[0], 'What is the area of a sector with radius $10$ and angle $214$ degrees?');
      assertEqual(result[1], '$186.75$');
  }
  test_p15();
  console.log("p15 passed");

  function test_p16() {
      var result = sum_of_polygon_angles();
      assertEqual(result[0], 'What is the sum of interior angles of a polygon with $3$ sides?');
      assertEqual(result[1], '$180$');
  }
  test_p16();
  console.log("p16 passed");

  function test_p17() {
      var result = surface_area_cone();
      assertEqual(result[0], 'Surface area of cone with height $= 6m$ and radius $= 1m$ is');
      assertEqual(result[1], '$22 m^2$');
  }
  test_p17();
  console.log("p17 passed");

  function test_p18() {
      var result = surface_area_cube();
      assertEqual(result[0], 'Surface area of cube with side $= 6m$ is');
      assertEqual(result[1], '$216 m^2$');
  }
  test_p18();
  console.log("p18 passed");

  function test_p19() {
      var result = surface_area_cuboid();
      assertEqual(result[0], 'Surface area of cuboid with sides of lengths: $4m, 4m, 1m$ is');
      assertEqual(result[1], '$48 m^2$');
  }
  test_p19();
  console.log("p19 passed");

  function test_p20() {
      var result = surface_area_cylinder();
      assertEqual(result[0], 'Surface area of cylinder with height $= 24m$ and radius $= 16m$ is');
      assertEqual(result[1], '$4021 m^2$');
  }
  test_p20();
  console.log("p20 passed");

  function test_p21() {
      var result = surface_area_pyramid();
      assertEqual(result[0], 'Surface area of pyramid with base length $= 40m$, base width $= 32m$, and height $= 12m$ is');
      assertEqual(result[1], '$2560 m^2$');
  }
  test_p21();
  console.log("p21 passed");

  function test_p22() {
      var result = surface_area_sphere();
      assertEqual(result[0], 'Surface area of a sphere with radius $= 2m$ is');
      assertEqual(result[1], '$50.27 m^2$');
  }
  test_p22();
  console.log("p22 passed");

  function test_p23() {
      var result = third_angle_of_triangle();
      assertEqual(result[0], 'Third angle of triangle with angles $21$ and $26 = $');
      assertEqual(result[1], '$133$');
  }
  test_p23();
  console.log("p23 passed");

  function test_p24() {
      var result = valid_triangle();
      assertEqual(result[0], 'Does triangle with sides $32, 39$ and $50$ exist?');
      assertEqual(result[1], '$Yes$');
  }
  test_p24();
  console.log("p24 passed");

  function test_p25() {
      var result = volume_cone();
      assertEqual(result[0], 'Volume of cone with height $= 25m$ and radius $= 11m$ is');
      assertEqual(result[1], '$3167 m^3$');
  }
  test_p25();
  console.log("p25 passed");

  function test_p26() {
      var result = volume_cube();
      assertEqual(result[0], 'Volume of cube with a side length of $12m$ is');
      assertEqual(result[1], '$1728 m^3$');
  }
  test_p26();
  console.log("p26 passed");

  function test_p27() {
      var result = volume_cuboid();
      assertEqual(result[0], 'Volume of cuboid with sides = $19m, 20m, 20m$ is');
      assertEqual(result[1], '$7600 m^3$');
  }
  test_p27();
  console.log("p27 passed");

  function test_p28() {
      var result = volume_cylinder();
      assertEqual(result[0], 'Volume of cylinder with height $= 33m$ and radius $= 5m$ is');
      assertEqual(result[1], '$2591 m^3$');
  }
  test_p28();
  console.log("p28 passed");

  function test_p29() {
      var result = volume_cone_frustum();
      assertEqual(result[0], 'Volume of frustum with height $= 30m$ and $r1 = 6m$ is and $r2 = 7m$ is ');
      assertEqual(result[1], '$3989.82 m^3$');
  }
  test_p29();
  console.log("p29 passed");

  function test_p30() {
      var result = volume_hemisphere();
      assertEqual(result[0], 'Volume of hemisphere with radius $65 m =$ ');
      assertEqual(result[1], '$575173.25 m^3$');
  }
  test_p30();
  console.log("p30 passed");

  function test_p31() {
      var result = volume_pyramid();
      assertEqual(result[0], 'Volume of pyramid with base length $= 15 m$, base width $= 6 m$ and height $= 36 m$ is');
      assertEqual(result[1], '$1080 m^3$');
  }
  test_p31();
  console.log("p31 passed");

  function test_p32() {
      var result = volume_sphere();
      assertEqual(result[0], 'Volume of sphere with radius $27 m = $');
      assertEqual(result[1], '$82447.96 m^3$');
  }
  test_p32();
  console.log("p32 passed");

  function test_p33() {
      var result = perimeter_of_polygons();
      assertEqual(result[0], 'The perimeter of a $10$ sided polygon with lengths of $66, 97, 50, 14, 62, 52, 107, 82, 58, 101$cm is: ');
      assertEqual(result[1], '$689$');
  }
  test_p33();
  console.log("p33 passed");
}
test();
///// Segment IGNORE END