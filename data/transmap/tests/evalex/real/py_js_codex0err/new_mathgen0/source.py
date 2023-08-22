##### Segment IGNORE BEGIN
import random
import hashlib
import math
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
    if hash_random() < 0.5:
        return x[0]
    else:
        return x[1]

random.randint = randint
random.choice = choice
##### Segment IGNORE END

##### Segment BEGIN p1
def absolute_difference(max_a=100, max_b=100):
    a = random.randint(-1 * max_a, max_a)
    b = random.randint(-1 * max_b, max_b)
    absDiff = abs(a - b)

    return f'$|{a}-{b}|=$', f"${absDiff}$"
##### Segment END

##### Segment BEGIN p2
def addition(max_sum=99, max_addend=50):
    if max_addend > max_sum:
        max_addend = max_sum
    a = random.randint(0, max_addend)
    b = random.randint(0, min((max_sum - a), max_addend))
    c = a + b

    problem = f'${a}+{b}=$'
    solution = f'${c}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p3
def compare_fractions(max_val=10):
    a = random.randint(1, max_val)
    b = random.randint(1, max_val)
    c = random.randint(1, max_val)
    d = random.randint(1, max_val)

    while (a == b):
        b = random.randint(1, max_val)
    while (c == d):
        d = random.randint(1, max_val)

    first = a / b
    second = c / d

    if (first > second):
        solution = ">"
    elif (first < second):
        solution = "<"
    else:
        solution = "="

    problem = rf"Which symbol represents the comparison between $\frac{{{a}}}{{{b}}}$ and $\frac{{{c}}}{{{d}}}$?"
    return problem, solution
##### Segment END

##### Segment BEGIN p4
def cube_root(min_no=1, max_no=1000):
    b = random.randint(min_no, max_no)
    a = b**(1 / 3)

    return (rf"What is the cube root of: $\sqrt[3]{{{b}}}=$ to 2 decimal places?", f"${round(a, 2)}$")
##### Segment END

##### Segment BEGIN p5
def divide_fractions(max_val=10):
    a = random.randint(1, max_val)
    b = random.randint(1, max_val)

    while (a == b):
        b = random.randint(1, max_val)

    c = random.randint(1, max_val)
    d = random.randint(1, max_val)
    while (c == d):
        d = random.randint(1, max_val)

    def calculate_gcd(x, y):
        while (y):
            x, y = y, x % y
        return x

    tmp_n = a * d
    tmp_d = b * c

    gcd = calculate_gcd(tmp_n, tmp_d)
    sol_numerator = tmp_n // gcd
    sol_denominator = tmp_d // gcd

    return rf'$\frac{{{a}}}{{{b}}}\div\frac{{{c}}}{{{d}}}=$', f'$\frac{{{sol_numerator}}}{{{sol_denominator}}}$'
##### Segment END

##### Segment BEGIN p6
def division(max_a=25, max_b=25):
    a = random.randint(1, max_a)
    b = random.randint(1, max_b)

    divisor = a * b
    dividend = random.choice([a, b])
    quotient = int(divisor / dividend)

    return rf'${divisor}\div{dividend}=$', f'${quotient}$'
##### Segment END

##### Segment BEGIN p7
def exponentiation(max_base=20, max_expo=10):
    base = random.randint(1, max_base)
    expo = random.randint(1, max_expo)

    return f'${base}^{{{expo}}}=$', f'${base**expo}$'
##### Segment END

##### Segment BEGIN p8
def factorial(max_input=6):
    a = random.randint(0, max_input)
    n = a
    b = 1
    while a != 1 and n > 0:
        b *= n
        n -= 1

    return f'${a}! =$', f'${b}$'
##### Segment END

##### Segment BEGIN p9
def fraction_multiplication(max_val=10):
    a = random.randint(1, max_val)
    b = random.randint(1, max_val)
    c = random.randint(1, max_val)
    d = random.randint(1, max_val)

    while (a == b):
        b = random.randint(1, max_val)

    while (c == d):
        d = random.randint(1, max_val)

    def calculate_gcd(x, y):
        while (y):
            x, y = y, x % y
        return x

    tmp_n = a * c
    tmp_d = b * d

    gcd = calculate_gcd(tmp_n, tmp_d)

    problem = rf"$\frac{{{a}}}{{{b}}}\cdot\frac{{{c}}}{{{d}}}=$"
    if (tmp_d == 1 or tmp_d == gcd):
        solution = rf"$\frac{{{tmp_n}}}{{{gcd}}}$"
    else:
        solution = rf"$\frac{{{tmp_n//gcd}}}{{{tmp_d//gcd}}}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p10
def fraction_to_decimal(max_res=99, max_divid=99):
    a = random.randint(0, max_divid)
    b = random.randint(1, min(max_res, max_divid))
    c = round(a / b, 2)

    return rf'${a}\div{b}=$', f'${c}$'
##### Segment END

##### Segment BEGIN p11
def greatest_common_divisor(numbers_count=2, max_num=10**3):
    def greatestCommonDivisorOfTwoNumbers(number1, number2):
        number1 = abs(number1)
        number2 = abs(number2)
        while number2 > 0:
            number1, number2 = number2, number1 % number2
        return number1

    numbers_count = max(numbers_count, 2)
    numbers = [random.randint(0, max_num) for _ in range(numbers_count)]

    greatestCommonDivisor = greatestCommonDivisorOfTwoNumbers(numbers[0], numbers[1])

    for index in range(1, numbers_count):
        greatestCommonDivisor = greatestCommonDivisorOfTwoNumbers(numbers[index], greatestCommonDivisor)

    return f'$GCD({",".join(map(str, numbers))})=$', f"${greatestCommonDivisor}$"
##### Segment END

##### Segment BEGIN p12
def is_composite(max_num=250):
    a = random.randint(2, max_num)

    problem = f"Is ${a}$ composite?"
    if a == 0 or a == 1:
        return problem, "No"
    for i in range(2, a):
        if a % i == 0:
            return problem, "Yes"
    solution = "No"

    return problem, solution
##### Segment END

##### Segment BEGIN p13
def is_prime(max_num=100):
    a = random.randint(2, max_num)
    problem = f"Is ${a}$ prime?"
    if a == 2:
        return problem, "Yes"
    if a % 2 == 0:
        return problem, "No"
    for i in range(3, a // 2 + 1, 2):
        if a % i == 0:
            return problem, "No"
    solution = "Yes"

    return problem, solution
##### Segment END

##### Segment BEGIN p14
def multiplication(max_multi=12):
    a = random.randint(0, max_multi)
    b = random.randint(0, max_multi)
    c = a * b

    return rf'${a}\cdot{b}=$', f'${c}$'
##### Segment END

##### Segment BEGIN p15
def percentage(max_value=99, max_percentage=99):
    a = random.randint(1, max_percentage)
    b = random.randint(1, max_value)
    problem = f"What is ${a}$% of ${b}$?"
    percentage = a / 100 * b
    formatted_float = "{:.2f}".format(percentage)
    solution = f"${formatted_float}$"

    return problem, solution
##### Segment END

##### Segment BEGIN p16
def percentage_difference(max_value=200, min_value=0):
    value_a = random.randint(min_value, max_value)
    value_b = random.randint(min_value, max_value)

    diff = 2 * (abs(value_a - value_b) / abs(value_a + value_b)) * 100
    diff = round(diff, 2)

    problem = f"What is the percentage difference between ${value_a}$ and ${value_b}$?"
    solution = f'${diff}$%'
    return problem, solution
##### Segment END

##### Segment BEGIN p17
def percentage_error(max_value=100, min_value=-100):
    observed_value = random.randint(min_value, max_value)
    exact_value = random.randint(min_value, max_value)

    if observed_value * exact_value < 0:
        observed_value *= -1

    error = (abs(observed_value - exact_value) / abs(exact_value)) * 100
    error = round(error, 2)

    problem = f"Find the percentage error when observed value equals ${observed_value}$ and exact value equals ${exact_value}$."
    solution = f'${error}$%'
    return problem, solution
##### Segment END

##### Segment BEGIN p18
def power_of_powers(max_base=50, max_power=10):
    base = random.randint(1, max_base)
    power1 = random.randint(1, max_power)
    power2 = random.randint(1, max_power)
    step = power1 * power2

    problem = f"Simplify ${base}^{{{power1}^{{{power2}}}}}$"
    solution = f"${base}^{{{step}}}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p19
def square(max_square_num=20):
    a = random.randint(1, max_square_num)
    b = a ** 2

    return f'${a}^2=$', f'${b}$'
##### Segment END

##### Segment BEGIN p20
def square_root(min_no=1, max_no=12):
    b = random.randint(min_no, max_no)
    a = b ** 2

    return rf'$\sqrt{{{a}}}=$', f'${b}$'
##### Segment END

##### Segment BEGIN p21
def simplify_square_root(max_variable=100):
    y = x = random.randint(1, max_variable)
    factors = {}
    f = 2
    while x != 1:
        if x % f == 0:
            if f not in factors:
                factors[f] = 0
            factors[f] += 1
            x /= f
        else:
            f += 1
    a = b = 1
    for i in factors.keys():
        if factors[i] & 1 == 0:
            a *= i ** (factors[i] // 2)
        else:
            a *= i ** ((factors[i] - 1) // 2)
            b *= i
    if a == 1 or b == 1:
        return simplify_square_root(max_variable)
    else:
        return rf'$\sqrt{{{y}}}$', rf'${a}\sqrt{{{b}}}$'
##### Segment END

##### Segment BEGIN p22
def subtraction(max_minuend=99, max_diff=99):
    a = random.randint(0, max_minuend)
    b = random.randint(max(0, (a - max_diff)), a)
    c = a - b

    return f'${a}-{b}=$', f'${c}$'
##### Segment END

##### Segment IGNORE BEGIN
def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")

def test_p1():
    a, b = absolute_difference()
    assert_equal(a, '$|-16-66|=$')
    assert_equal(b, '$82$')
test_p1()

def test_p2():
    a, b = addition()
    assert_equal(a, '$15+14=$')
    assert_equal(b, '$29$')
test_p2()

def test_p3():
    a, b = compare_fractions()
    assert_equal(a, 'Which symbol represents the comparison between $\\frac{10}{1}$ and $\\frac{5}{2}$?')
    assert_equal(b, '>')
test_p3()

def test_p4():
    a, b = cube_root()
    assert_equal(a, 'What is the cube root of: $\\sqrt[3]{291}=$ to 2 decimal places?')
    assert_equal(b, '$6.63$')
test_p4()

def test_p5():
    a, b = divide_fractions()
    assert_equal(a, '$\\frac{4}{5}\\div\\frac{3}{6}=$')
    assert_equal(b, '$\x0crac{8}{5}$')
test_p5()

def test_p6():
    a, b = division()
    assert_equal(a, '$414\\div23=$')
    assert_equal(b, '$18$')
test_p6()

def test_p7():
    a, b = exponentiation()
    assert_equal(a, '$7^{6}=$')
    assert_equal(b, '$117649$')
test_p7()

def test_p8():
    a, b = factorial()
    assert_equal(a, '$6! =$')
    assert_equal(b, '$720$')
test_p8()

def test_p9():
    a, b = fraction_multiplication()
    assert_equal(a, '$\\frac{5}{8}\\cdot\\frac{4}{8}=$')
    assert_equal(b, '$\\frac{5}{16}$')
test_p9()

def test_p10():
    a, b = fraction_to_decimal()
    assert_equal(a, '$37\\div40=$')
    assert_equal(b, '$0.93$')
test_p10()

def test_p11():
    a, b = greatest_common_divisor()
    assert_equal(a, '$GCD(351,207)=$')
    assert_equal(b, '$9$')
test_p11()

def test_p12():
    a, b = is_composite()
    assert_equal(a, 'Is $97$ composite?')
    assert_equal(b, 'No')
test_p12()

def test_p13():
    a, b = is_prime()
    assert_equal(a, 'Is $92$ prime?')
    assert_equal(b, 'No')
test_p13()

def test_p14():
    a, b = multiplication()
    assert_equal(a, '$11\\cdot10=$')
    assert_equal(b, '$110$')
test_p14()

def test_p15():
    a, b = percentage()
    assert_equal(a, 'What is $53$% of $62$?')
    assert_equal(b, '$32.86$')
test_p15()

def test_p16():
    a, b = percentage_difference()
    assert_equal(a, 'What is the percentage difference between $93$ and $96$?')
    assert_equal(b, '$3.17$%')
test_p16()

def test_p17():
    a, b = percentage_error()
    assert_equal(a, 'Find the percentage error when observed value equals $-37$ and exact value equals $-91$.')
    assert_equal(b, '$59.34$%')
test_p17()

def test_p18():
    a, b = power_of_powers()
    assert_equal(a, 'Simplify $42^{3^{5}}$')
    assert_equal(b, '$42^{15}$')
test_p18()

def test_p19():
    a, b = square()
    assert_equal(a, '$6^2=$')
    assert_equal(b, '$36$')
test_p19()

def test_p20():
    a, b = square_root()
    assert_equal(a, '$\\sqrt{36}=$')
    assert_equal(b, '$6$')
test_p20()

def test_p21():
    a, b = simplify_square_root()
    assert_equal(a, '$\\sqrt{20}$')
    assert_equal(b, '$2\\sqrt{5}$')
test_p21()

def test_p22():
    a, b = subtraction()
    assert_equal(a, '$59-3=$')
    assert_equal(b, '$56$')
test_p22()

##### Segment IGNORE END