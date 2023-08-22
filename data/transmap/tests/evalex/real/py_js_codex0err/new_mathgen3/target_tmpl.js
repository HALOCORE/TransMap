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

///// Segment BEGIN p23
///// Segment END

///// Segment BEGIN p24
///// Segment END

///// Segment BEGIN p25
///// Segment END

///// Segment BEGIN p26
///// Segment END

///// Segment BEGIN p27
///// Segment END

///// Segment BEGIN p28
///// Segment END

///// Segment BEGIN p29
///// Segment END

///// Segment BEGIN p30
///// Segment END

///// Segment BEGIN p31
///// Segment END

///// Segment BEGIN p32
///// Segment END

///// Segment BEGIN p33
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