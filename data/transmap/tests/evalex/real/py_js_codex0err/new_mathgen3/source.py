##### Segment IGNORE BEGIN
import random
import hashlib
import math
from math import cos, sin, pi
seed = 1

def hash_random():
    global seed
    h = hashlib.sha256()
    h.update(str(seed).encode('utf-8'))
    seed += 1
    return int(h.hexdigest(), 16) / (2 ** 256 - 1)

def randint(min, max):
    return math.floor(hash_random() * (max - min + 1)) + min

def choice(x):
    return x[math.floor(hash_random() * len(x))]

def sample(x, n):
    x = list(x)
    lst = []
    for _ in range(n):
        index = math.floor(hash_random() * len(x))
        lst.append(x[index])
        del x[index]
    return lst

def uniform(a, b):
    return hash_random() * (b - a) + a

random.randint = randint
random.choice = choice
random.uniform = uniform
random.sample = sample
##### Segment IGNORE END

##### Segment BEGIN p1
def angle_btw_vectors(max_elt_amt=20):
    s = 0
    v1 = [round(random.uniform(0, 1000), 2) for i in range(random.randint(2, max_elt_amt))]
    v2 = [round(random.uniform(0, 1000), 2) for i in v1]
    for i in range(len(v1)):
        s += v1[i] * v2[i]

    mags = math.sqrt(sum([i**2 for i in v1])) * math.sqrt(sum([i**2 for i in v2]))
    solution = ''
    ans = 0
    try:
        ans = round(math.acos(s / mags), 2)
        solution = f"${ans}$ radians"
    except ValueError:
        print('angleBtwVectorsFunc has some issues with math module, line 16')
        solution = 'NaN'
        ans = 'NaN'
    problem = f"angle between the vectors ${v1}$ and ${v2}$ is:"
    return problem, solution
##### Segment END

##### Segment BEGIN p2
def angle_regular_polygon(min_val=3, max_val=20):
    sideNum = random.randint(min_val, max_val)
    problem = f"Find the angle of a regular polygon with ${sideNum}$ sides"

    exteriorAngle = round((360 / sideNum), 2)
    solution = f'${180 - exteriorAngle}$'

    return problem, solution
##### Segment END

##### Segment BEGIN p3
def arc_length(max_radius=49, max_angle=359):
    radius = random.randint(1, max_radius)
    angle = random.randint(1, max_angle)
    angle_arc_length = float((angle / 360) * 2 * math.pi * radius)
    formatted_float = "{:.5f}".format(angle_arc_length)

    problem = f"Given radius, ${radius}$ and angle, ${angle}$. Find the arc length of the angle."
    solution = f"Arc length of the angle $= {formatted_float}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p4
def area_of_circle(max_radius=100):
    r = random.randint(0, max_radius)
    area = round(pi * r * r, 2)

    problem = f'Area of circle with radius ${r}=$'
    return problem, f'${area}$'
##### Segment END

##### Segment BEGIN p5
def area_of_circle_given_center_and_point(max_coordinate=10, max_radius=10):
    r = random.randint(0, max_radius)
    center_x = random.randint(-max_coordinate, max_coordinate)
    center_y = random.randint(-max_coordinate, max_coordinate)

    angle = random.choice([0, pi // 6, pi // 2, pi, pi + pi // 6, 3 * pi // 2])

    point_x = center_x + round(r * cos(angle), 2)
    point_y = center_y + round(r * sin(angle), 2)

    area = round(pi * r * r, 2)

    problem = f"Area of circle with center $({center_x},{center_y})$ and passing through $({point_x}, {point_y})$ is"
    return problem, f'${area}$'
##### Segment END

##### Segment BEGIN p6
def area_of_triangle(max_a=20, max_b=20):
    a = random.randint(1, max_a)
    b = random.randint(1, max_b)
    c = random.randint(abs(b - a) + 1, abs(a + b) - 1)

    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) * (s - c))**0.5

    problem = f"Area of triangle with side lengths: ${a}, {b}, {c} = $"
    solution = f'${round(area, 2)}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p7
def circumference(max_radius=100):
    r = random.randint(0, max_radius)
    circumference = round(2 * math.pi * r, 2)

    problem = f"Circumference of circle with radius ${r} = $"
    return problem, f'${circumference}$'
##### Segment END

##### Segment BEGIN p8
def complementary_and_supplementary_angle(max_supp=180, max_comp=90):
    angleType = random.choice(["supplementary", "complementary"])

    if angleType == "supplementary":
        angle = random.randint(1, max_supp)
        angleAns = 180 - angle
    else:
        angle = random.randint(1, max_comp)
        angleAns = 90 - angle

    problem = f"The {angleType} angle of ${angle} =$"
    solution = f'${angleAns}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p9
def curved_surface_area_cylinder(max_radius=49, max_height=99):
    r = random.randint(1, max_radius)
    h = random.randint(1, max_height)
    csa = float(2 * math.pi * r * h)
    formatted_float = round(csa, 2)  # "{:.5f}".format(csa)

    problem = f"What is the curved surface area of a cylinder of radius, ${r}$ and height, ${h}$?"
    solution = f"${formatted_float}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p10
def degree_to_rad(max_deg=360):
    a = random.randint(0, max_deg)
    b = (math.pi * a) / 180
    b = round(b, 2)

    problem = f"Angle ${a}$ degrees in radians is: "
    solution = f'${b}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p11
def equation_of_line_from_two_points(max_coordinate=20, min_coordinate=-20):
    x1 = random.randint(min_coordinate, max_coordinate)
    x2 = random.randint(min_coordinate, max_coordinate)

    y1 = random.randint(min_coordinate, max_coordinate)
    y2 = random.randint(min_coordinate, max_coordinate)

    coeff_y = (x2 - x1)
    coeff_x = (y2 - y1)
    constant = y2 * coeff_y - x2 * coeff_x

    gcd = math.gcd(abs(coeff_x), abs(coeff_y))

    if gcd != 1:
        if coeff_y > 0:
            coeff_y //= gcd
        if coeff_x > 0:
            coeff_x //= gcd
        if constant > 0:
            constant //= gcd
        if coeff_y < 0:
            coeff_y = -(-coeff_y // gcd)
        if coeff_x < 0:
            coeff_x = -(-coeff_x // gcd)
        if constant < 0:
            constant = -(-constant // gcd)
    if coeff_y < 0:
        coeff_y = -(coeff_y)
        coeff_x = -(coeff_x)
        constant = -(constant)
    if coeff_x in [1, -1]:
        if coeff_x == 1:
            coeff_x = ''
        else:
            coeff_x = '-'
    if coeff_y in [1, -1]:
        if coeff_y == 1:
            coeff_y = ''
        else:
            coeff_y = '-'

    problem = f"What is the equation of the line between points $({x1},{y1})$ and $({x2},{y2})$ in slope-intercept form?"
    if coeff_x == 0:
        solution = str(coeff_y) + "y = " + str(constant)
    elif coeff_y == 0:
        solution = str(coeff_x) + "x = " + str(-constant)
    else:
        if constant > 0:
            solution = str(coeff_y) + "y = " + str(coeff_x) + \
                "x + " + str(constant)
        else:
            solution = str(coeff_y) + "y = " + \
                str(coeff_x) + "x " + str(constant)
    return problem, f'${solution}$'
##### Segment END

##### Segment BEGIN p12
def fourth_angle_of_quadrilateral(max_angle=180):
    angle1 = random.randint(1, max_angle)
    angle2 = random.randint(1, 240 - angle1)
    angle3 = random.randint(1, 340 - (angle1 + angle2))

    sum_ = angle1 + angle2 + angle3
    angle4 = 360 - sum_

    problem = f"Fourth angle of quadrilateral with angles ${angle1} , {angle2}, {angle3} =$"
    solution = f'${angle4}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p13
def pythagorean_theorem(max_length=20):
    a = random.randint(1, max_length)
    b = random.randint(1, max_length)
    c = round((a ** 2 + b ** 2) ** 0.5, 2)

    problem = f"What is the hypotenuse of a right triangle given the other two sides have lengths ${a}$ and ${b}$?"
    solution = f"${c}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p14
def radian_to_deg(max_rad=6.28):
    a = random.randint(0, int(max_rad * 100)) / 100
    b = round((180 * a) / math.pi, 2)

    problem = f"Angle ${a}$ radians in degrees is: "
    solution = f'${b}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p15
def sector_area(max_radius=49, max_angle=359):
    r = random.randint(1, max_radius)
    a = random.randint(1, max_angle)
    secArea = float((a / 360) * math.pi * r * r)
    formatted_float = round(secArea, 2)

    problem = f"What is the area of a sector with radius ${r}$ and angle ${a}$ degrees?"
    solution = f"${formatted_float}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p16
def sum_of_polygon_angles(max_sides=12):
    side_count = random.randint(3, max_sides)
    sum = (side_count - 2) * 180

    problem = f"What is the sum of interior angles of a polygon with ${side_count}$ sides?"
    return problem, f'${sum}$'
##### Segment END

##### Segment BEGIN p17
def surface_area_cone(max_radius=20, max_height=50, unit='m'):
    a = random.randint(1, max_height)
    b = random.randint(1, max_radius)

    slopingHeight = math.sqrt(a**2 + b**2)
    ans = int(math.pi * b * slopingHeight + math.pi * b * b)

    problem = f"Surface area of cone with height $= {a}{unit}$ and radius $= {b}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p18
def surface_area_cube(max_side=20, unit='m'):
    a = random.randint(1, max_side)
    ans = 6 * (a ** 2)

    problem = f"Surface area of cube with side $= {a}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p19
def surface_area_cuboid(max_side=20, unit='m'):
    a = random.randint(1, max_side)
    b = random.randint(1, max_side)
    c = random.randint(1, max_side)
    ans = 2 * (a * b + b * c + c * a)

    problem = f"Surface area of cuboid with sides of lengths: ${a}{unit}, {b}{unit}, {c}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p20
def surface_area_cylinder(max_radius=20, max_height=50, unit='m'):
    a = random.randint(1, max_height)
    b = random.randint(1, max_radius)
    ans = int(2 * math.pi * a * b + 2 * math.pi * b * b)

    problem = f"Surface area of cylinder with height $= {a}{unit}$ and radius $= {b}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p21
def surface_area_pyramid(unit='m'):
    _PYTHAGOREAN = [(3, 4, 5),(6, 8, 10),(9, 12, 15),(12, 16, 20),(15, 20, 25),(5, 12, 13),(10, 24, 26),(7, 24, 25)]

    height, half_width, triangle_height_1 = random.sample(random.choice(_PYTHAGOREAN), 3)

    triangle_1 = half_width * triangle_height_1

    second_triplet = random.choice([i for i in _PYTHAGOREAN if height in i])
    half_length, triangle_height_2 = random.sample(tuple(i for i in second_triplet if i != height), 2)

    triangle_2 = half_length * triangle_height_2

    base = 4 * half_width * half_length

    ans = base + 2 * triangle_1 + 2 * triangle_2

    problem = f"Surface area of pyramid with base length $= {2*half_length}{unit}$, base width $= {2*half_width}{unit}$, and height $= {height}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p22
def surface_area_sphere(max_side=20, unit='m'):
    r = random.randint(1, max_side)
    ans = round(4 * math.pi * r * r, 2)

    problem = f"Surface area of a sphere with radius $= {r}{unit}$ is"
    solution = f"${ans} {unit}^2$"
    return problem, solution
##### Segment END

##### Segment BEGIN p23
def third_angle_of_triangle(max_angle=89):
    angle1 = random.randint(1, max_angle)
    angle2 = random.randint(1, max_angle)
    angle3 = 180 - (angle1 + angle2)

    problem = f"Third angle of triangle with angles ${angle1}$ and ${angle2} = $"
    return problem, f'${angle3}$'
##### Segment END

##### Segment BEGIN p24
def valid_triangle(max_side_length=50):
    sideA = random.randint(1, max_side_length)
    sideB = random.randint(1, max_side_length)
    sideC = random.randint(1, max_side_length)

    sideSums = [sideA + sideB, sideB + sideC, sideC + sideA]
    sides = [sideC, sideA, sideB]

    exists = True & (sides[0] < sideSums[0]) & (sides[1] < sideSums[1]) & (
        sides[2] < sideSums[2])

    problem = f"Does triangle with sides ${sideA}, {sideB}$ and ${sideC}$ exist?"
    solution = "Yes" if exists else "No"
    return problem, f'${solution}$'
##### Segment END

##### Segment BEGIN p25
def volume_cone(max_radius=20, max_height=50, unit='m'):
    a = random.randint(1, max_height)
    b = random.randint(1, max_radius)
    ans = int(math.pi * b * b * a * (1 / 3))

    problem = f"Volume of cone with height $= {a}{unit}$ and radius $= {b}{unit}$ is"
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p26
def volume_cube(max_side=20, unit='m'):
    a = random.randint(1, max_side)
    ans = a**3

    problem = f"Volume of cube with a side length of ${a}{unit}$ is"
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p27
def volume_cuboid(max_side=20, unit='m'):
    a = random.randint(1, max_side)
    b = random.randint(1, max_side)
    c = random.randint(1, max_side)
    ans = a * b * c

    problem = f"Volume of cuboid with sides = ${a}{unit}, {b}{unit}, {c}{unit}$ is"
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p28
def volume_cylinder(max_radius=20, max_height=50, unit='m'):
    a = random.randint(1, max_height)
    b = random.randint(1, max_radius)
    ans = int(math.pi * b * b * a)

    problem = f"Volume of cylinder with height $= {a}{unit}$ and radius $= {b}{unit}$ is"
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p29
def volume_cone_frustum(max_r1=20, max_r2=20, max_height=50, unit='m'):
    h = random.randint(1, max_height)
    r1 = random.randint(1, max_r1)
    r2 = random.randint(1, max_r2)
    ans = round(((math.pi * h) * (r1 ** 2 + r2 ** 2 + r1 * r2)) / 3, 2)

    problem = f"Volume of frustum with height $= {h}{unit}$ and $r1 = {r1}{unit}$ is and $r2 = {r2}{unit}$ is "
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p30
def volume_hemisphere(max_radius=100):
    r = random.randint(1, max_radius)
    ans = round((2 * math.pi / 3) * r**3, 2)

    problem = f"Volume of hemisphere with radius ${r} m =$ "
    solution = f"${ans} m^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p31
def volume_pyramid(max_length=20, max_width=20, max_height=50, unit='m'):
    length = random.randint(1, max_length)
    width = random.randint(1, max_width)
    height = random.randint(1, max_height)

    ans = round((length * width * height) / 3, 2)

    problem = f"Volume of pyramid with base length $= {length} {unit}$, base width $= {width} {unit}$ and height $= {height} {unit}$ is"
    solution = f"${ans} {unit}^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p32
def volume_sphere(max_radius=100):
    r = random.randint(1, max_radius)
    ans = round((4 * math.pi / 3) * r**3, 2)

    problem = f"Volume of sphere with radius ${r} m = $"
    solution = f"${ans} m^3$"
    return problem, solution
##### Segment END

##### Segment BEGIN p33
def perimeter_of_polygons(max_sides=12, max_length=120):
    size_of_sides = random.randint(3, max_sides)
    sides = [random.randint(1, max_length) for _ in range(size_of_sides)]

    problem = f"The perimeter of a ${size_of_sides}$ sided polygon with lengths of ${', '.join(map(str, sides))}$cm is: "
    solution = sum(sides)

    return problem, f'${solution}$'
##### Segment END

##### Segment IGNORE BEGIN
def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")

def test_p1():
    a, b = angle_btw_vectors()
    assert_equal(a, 'angle between the vectors $[829.89, 304.8, 293.49, 934.28, 906.11, 472.69, 173.37, 99.0, 290.11]$ and $[311.65, 419.22, 249.45, 520.14, 899.08, 693.34, 270.07, 307.76, 578.14]$ is:')
    assert_equal(b, '$0.49$ radians')
test_p1()

def test_p2():
    a, b = angle_regular_polygon()
    assert_equal(a, 'Find the angle of a regular polygon with $20$ sides')
    assert_equal(b, '$162.0$')
test_p2()

def test_p3():
    a, b = arc_length()
    assert_equal(a, 'Given radius, $22$ and angle, $169$. Find the arc length of the angle.')
    assert_equal(b, 'Arc length of the angle $= 64.89134$')
test_p3()

def test_p4():
    a, b = area_of_circle()
    assert_equal(a, 'Area of circle with radius $32=$')
    assert_equal(b, '$3216.99$')
test_p4()

def test_p5():
    a, b = area_of_circle_given_center_and_point()
    assert_equal(a, 'Area of circle with center $(5,-3)$ and passing through $(9.32, 3.7300000000000004)$ is')
    assert_equal(b, '$201.06$')
test_p5()

def test_p6():
    a, b = area_of_triangle()
    assert_equal(a, 'Area of triangle with side lengths: $8, 5, 7 = $')
    assert_equal(b, '$17.32$')
test_p6()

def test_p7():
    a, b = circumference()
    assert_equal(a, 'Circumference of circle with radius $92 = $')
    assert_equal(b, '$578.05$')
test_p7()

def test_p8():
    a, b = complementary_and_supplementary_angle()
    assert_equal(a, 'The complementary angle of $70 =$')
    assert_equal(b, '$20$')
test_p8()

def test_p9():
    a, b = curved_surface_area_cylinder()
    assert_equal(a, 'What is the curved surface area of a cylinder of radius, $26$ and height, $62$?')
    assert_equal(b, '$10128.49$')
test_p9()

def test_p10():
    a, b = degree_to_rad()
    assert_equal(a, 'Angle $167$ degrees in radians is: ')
    assert_equal(b, '$2.91$')
test_p10()

def test_p11():
    a, b = equation_of_line_from_two_points()
    assert_equal(a, 'What is the equation of the line between points $(-1,-19)$ and $(7,14)$ in slope-intercept form?')
    assert_equal(b, '$8y = 33x -119$')
test_p11()

def test_p12():
    a, b = fourth_angle_of_quadrilateral()
    assert_equal(a, 'Fourth angle of quadrilateral with angles $44 , 89, 56 =$')
    assert_equal(b, '$171$')
test_p12()

def test_p13():
    a, b = pythagorean_theorem()
    assert_equal(a, 'What is the hypotenuse of a right triangle given the other two sides have lengths $9$ and $11$?')
    assert_equal(b, '$14.21$')
test_p13()

def test_p14():
    a, b = radian_to_deg()
    assert_equal(a, 'Angle $0.93$ radians in degrees is: ')
    assert_equal(b, '$53.29$')
test_p14()

def test_p15():
    a, b = sector_area()
    assert_equal(a, 'What is the area of a sector with radius $10$ and angle $214$ degrees?')
    assert_equal(b, '$186.75$')
test_p15()

def test_p16():
    a, b = sum_of_polygon_angles()
    assert_equal(a, 'What is the sum of interior angles of a polygon with $3$ sides?')
    assert_equal(b, '$180$')
test_p16()

def test_p17():
    a, b = surface_area_cone()
    assert_equal(a, 'Surface area of cone with height $= 6m$ and radius $= 1m$ is')
    assert_equal(b, '$22 m^2$')
test_p17()

def test_p18():
    a, b = surface_area_cube()
    assert_equal(a, 'Surface area of cube with side $= 6m$ is')
    assert_equal(b, '$216 m^2$')
test_p18()

def test_p19():
    a, b = surface_area_cuboid()
    assert_equal(a, 'Surface area of cuboid with sides of lengths: $4m, 4m, 1m$ is')
    assert_equal(b, '$48 m^2$')
test_p19()

def test_p20():
    a, b = surface_area_cylinder()
    assert_equal(a, 'Surface area of cylinder with height $= 24m$ and radius $= 16m$ is')
    assert_equal(b, '$4021 m^2$')
test_p20()

def test_p21():
    a, b = surface_area_pyramid()
    assert_equal(a, 'Surface area of pyramid with base length $= 40m$, base width $= 32m$, and height $= 12m$ is')
    assert_equal(b, '$2560 m^2$')
test_p21()

def test_p22():
    a, b = surface_area_sphere()
    assert_equal(a, 'Surface area of a sphere with radius $= 2m$ is')
    assert_equal(b, '$50.27 m^2$')
test_p22()

def test_p23():
    a, b = third_angle_of_triangle()
    assert_equal(a, 'Third angle of triangle with angles $21$ and $26 = $')
    assert_equal(b, '$133$')
test_p23()

def test_p24():
    a, b = valid_triangle()
    assert_equal(a, 'Does triangle with sides $32, 39$ and $50$ exist?')
    assert_equal(b, '$Yes$')
test_p24()

def test_p25():
    a, b = volume_cone()
    assert_equal(a, 'Volume of cone with height $= 25m$ and radius $= 11m$ is')
    assert_equal(b, '$3167 m^3$')
test_p25()

def test_p26():
    a, b = volume_cube()
    assert_equal(a, 'Volume of cube with a side length of $12m$ is')
    assert_equal(b, '$1728 m^3$')
test_p26()

def test_p27():
    a, b = volume_cuboid()
    assert_equal(a, 'Volume of cuboid with sides = $19m, 20m, 20m$ is')
    assert_equal(b, '$7600 m^3$')
test_p27()

def test_p28():
    a, b = volume_cylinder()
    assert_equal(a, 'Volume of cylinder with height $= 33m$ and radius $= 5m$ is')
    assert_equal(b, '$2591 m^3$')
test_p28()

def test_p29():
    a, b = volume_cone_frustum()
    assert_equal(a, 'Volume of frustum with height $= 30m$ and $r1 = 6m$ is and $r2 = 7m$ is ')
    assert_equal(b, '$3989.82 m^3$')
test_p29()

def test_p30():
    a, b = volume_hemisphere()
    assert_equal(a, 'Volume of hemisphere with radius $65 m =$ ')
    assert_equal(b, '$575173.25 m^3$')
test_p30()

def test_p31():
    a, b = volume_pyramid()
    assert_equal(a, 'Volume of pyramid with base length $= 15 m$, base width $= 6 m$ and height $= 36 m$ is')
    assert_equal(b, '$1080.0 m^3$')
test_p31()

def test_p32():
    a, b = volume_sphere()
    assert_equal(a, 'Volume of sphere with radius $27 m = $')
    assert_equal(b, '$82447.96 m^3$')
test_p32()

def test_p33():
    a, b = perimeter_of_polygons()
    assert_equal(a, 'The perimeter of a $10$ sided polygon with lengths of $66, 97, 50, 14, 62, 52, 107, 82, 58, 101$cm is: ')
    assert_equal(b, '$689$')
test_p33()
##### Segment IGNORE END