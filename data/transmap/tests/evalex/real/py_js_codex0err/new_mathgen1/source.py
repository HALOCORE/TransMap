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

random.randint = randint
##### Segment IGNORE END

##### Segment BEGIN p1
def bcd_to_decimal(max_number=10000):
    n = random.randint(1000, max_number)
    binstring = ''
    while True:
        q, r = divmod(n, 10)
        nibble = bin(r).replace('0b', "")
        while len(nibble) < 4:
            nibble = '0' + nibble
        binstring = nibble + binstring
        if q == 0:
            break
        else:
            n = q

    problem = f"Integer of Binary Coded Decimal ${n} =$ "
    solution = f'${int(binstring, 2)}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p2
def binary_2s_complement(maxDigits=10):
    digits = random.randint(1, maxDigits)
    question = ''.join([str(random.randint(0, 1)) for i in range(digits)]).lstrip('0')

    answer = []
    for i in question:
        answer.append(str(int(not bool(int(i)))))

    carry = True
    j = len(answer) - 1
    while j >= 0:
        if answer[j] == '0':
            answer[j] = '1'
            carry = False
            break
        answer[j] = '0'
        j -= 1

    if j == 0 and carry is True:
        answer.insert(0, '1')

    problem = f"2's complement of ${question} = $"
    solution = ''.join(answer).lstrip('0')
    return problem, f'${solution}$'
##### Segment END

##### Segment BEGIN p3
def binary_complement_1s(maxDigits=10):
    question = ''.join([str(random.randint(0, 1)) for _ in range(random.randint(1, maxDigits))])
    answer = ''.join(["0" if digit == "1" else "1" for digit in question])

    problem = f'${question} = $'
    return problem, f'${answer}$'
##### Segment END

##### Segment BEGIN p4
def binary_to_decimal(max_dig=10):
    problem = ''.join([str(random.randint(0, 1)) for _ in range(random.randint(1, max_dig))])
    solution = f'${int(problem, 2)}$'
    return f'${problem}$', solution
##### Segment END

##### Segment BEGIN p5
def binary_to_hex(max_dig=10):
    problem = ''.join([str(random.randint(0, 1)) for _ in range(random.randint(1, max_dig))])
    solution = f'${hex(int(problem, 2))}$'
    return f'${problem}$', solution
##### Segment END

##### Segment BEGIN p6
def decimal_to_bcd(max_number=10000):
    n = random.randint(1000, max_number)
    x = n
    # binstring = ''
    bcdstring = ''
    while x > 0:
        nibble = x % 16
        bcdstring = str(nibble) + bcdstring
        x >>= 4

    problem = f"BCD of Decimal Number ${n} = $"
    return problem, f'${bcdstring}$'
##### Segment END

##### Segment BEGIN p7
def decimal_to_binary(max_dec=99):
    a = random.randint(1, max_dec)
    b = bin(a).replace("0b", "")

    problem = f'Binary of ${a} = $'
    solution = f'${b}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p8
def decimal_to_hexadeci(max_dec=1000):
    a = random.randint(0, max_dec)
    b = hex(a)

    problem = f"Hexadecimal of ${a} = $"
    solution = f"${b}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p9
def decimal_to_octal(max_decimal=4096):
    x = random.randint(0, max_decimal)

    problem = f"The decimal number ${x}$ in octal is: "
    solution = f'${oct(x)}$'

    return problem, solution
##### Segment END

##### Segment BEGIN p10
def fibonacci_series(min_no=1):
    n = random.randint(min_no, 20)

    def createFibList(n):
        list = []
        for i in range(n):
            if i < 2:
                list.append(i)
            else:
                val = list[i - 1] + list[i - 2]
                list.append(val)
        return list

    fibList = createFibList(n)

    problem = f"The Fibonacci Series of the first ${n}$ numbers is ?"
    solution = ', '.join(map(str, fibList))
    return problem, f'${solution}$'
##### Segment END

##### Segment BEGIN p11
def modulo_division(max_res=99, max_modulo=99):
    a = random.randint(0, max_modulo)
    b = random.randint(0, min(max_res, max_modulo))
    c = a % b if b != 0 else 0

    problem = f'${a}$ % ${b}$ = $'
    solution = f'${c}$'
    return problem, solution
##### Segment END

##### Segment BEGIN p12
def nth_fibonacci_number(max_n=100):
    gratio = (1 + math.sqrt(5)) / 2
    n = random.randint(1, max_n)

    problem = f"What is the {n}th Fibonacci number?"
    solution = int(
        (math.pow(gratio, n) - math.pow(-gratio, -n)) / (math.sqrt(5)))

    return problem, f'${solution}$'
##### Segment END

##### Segment IGNORE BEGIN
def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")

def test_p1():
  a, b = bcd_to_decimal()
  assert_equal(a, 'Integer of Binary Coded Decimal $4 =$ ')
  assert_equal(b, '$18304$')
test_p1()

def test_p2():
  a, b = binary_2s_complement()
  assert_equal(a, "2's complement of $1100000 = $")
  assert_equal(b, '$100000$')
test_p2()

def test_p3():
  a, b = binary_complement_1s()
  assert_equal(a, '$01110 = $')
  assert_equal(b, '$10001$')
test_p3()

def test_p4():
  a, b = binary_to_decimal()
  assert_equal(a, '$1100$')
  assert_equal(b, '$12$')
test_p4()

def test_p5():
  a, b = binary_to_hex()
  assert_equal(a, '$1100$')
  assert_equal(b, '$0xc$')
test_p5()

def test_p6():
  a, b = decimal_to_bcd()
  assert_equal(a, 'BCD of Decimal Number $4160 = $')
  assert_equal(b, '$1040$')
test_p6()

def test_p7():
  a, b = decimal_to_binary()
  assert_equal(a, 'Binary of $21 = $')
  assert_equal(b, '$10101$')
test_p7()

def test_p8():
  a, b = decimal_to_hexadeci()
  assert_equal(a, 'Hexadecimal of $384 = $')
  assert_equal(b, '$0x180$')
test_p8()

def test_p9():
  a, b = decimal_to_octal()
  assert_equal(a, 'The decimal number $3762$ in octal is: ')
  assert_equal(b, '$0o7262$')
test_p9()

def test_p10():
  a, b = fibonacci_series()
  assert_equal(a, 'The Fibonacci Series of the first $18$ numbers is ?')
  assert_equal(b, '$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597$')
test_p10()

def test_p11():
  a, b = modulo_division()
  assert_equal(a, '$77$ % $52$ = $')
  assert_equal(b, '$25$')
test_p11()

def test_p12():
  a, b = nth_fibonacci_number()
  assert_equal(a, 'What is the 63th Fibonacci number?')
  assert_equal(b, '$6557470319842$')
test_p12()

##### Segment IGNORE END