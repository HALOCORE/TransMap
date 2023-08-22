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

def sample(x, n):
    # This sample function works assuming x is in the form of range(a, b)
    a = x[0]
    b = x[len(x)-1] + 1

    lst = []
    for i in range(n):
        lst.append(math.floor(hash_random() * (b - a + 1)) + a)
    return lst

random.random = hash_random
random.randint = randint
random.sample = sample
##### Segment IGNORE END

##### Segment BEGIN p1
def combinations(max_lengthgth=20):
    a = random.randint(10, max_lengthgth)
    b = random.randint(0, 9)

    solution = int(math.factorial(a) / (math.factorial(b) * math.factorial(a - b)))

    problem = f"Find the number of combinations from ${a}$ objects picked ${b}$ at a time."
    return problem, f'${solution}$'
##### Segment END

##### Segment BEGIN p2
def conditional_probability():
    P_disease = round(2. * random.random(), 2)
    true_positive = round(random.random() + float(random.randint(90, 99)), 2)
    true_negative = round(random.random() + float(random.randint(90, 99)), 2)

    def BayesFormula(P_disease, true_positive, true_negative):
        P_notDisease = 100. - P_disease
        false_positive = 100. - true_negative
        P_plus = (P_disease) * (true_positive) + (P_notDisease) * (false_positive)
        P_disease_plus = ((true_positive) * (100 * P_disease)) / P_plus

        return P_disease_plus

    answer = round(BayesFormula(P_disease, true_positive, true_negative), 2)

    problem = "Someone tested positive for a nasty disease which only ${0:.2f}$% of the population have. Test sensitivity (true positive) is equal to $SN={1:.2f}$% whereas test specificity (true negative) $SP={2:.2f}$%. What is the probability that this guy really has that disease?".format(P_disease, true_positive, true_negative)
    solution = f'${answer}$%'
    return problem, solution
##### Segment END

##### Segment BEGIN p3
def confidence_interval():
    n = random.randint(20, 40)
    j = random.randint(0, 3)

    lst = random.sample(range(200, 300), n)
    lst_per = [80, 90, 95, 99]
    lst_t = [1.282, 1.645, 1.960, 2.576]

    mean = 0
    sd = 0

    for i in lst:
        count = i + mean
        mean = count

    mean = mean / n

    for i in lst:
        x = (i - mean)**2 + sd
        sd = x

    sd = sd / n
    standard_error = lst_t[j] * math.sqrt(sd / n)
    upper = round(mean + standard_error, 2)
    lower = round(mean - standard_error, 2)

    problem = 'The confidence interval for sample ${}$ with ${}$% confidence is'.format([x for x in lst], lst_per[j])
    solution = f'$({upper}, {lower})$'
    return problem, solution
##### Segment END

##### Segment BEGIN p4
def data_summary(number_values=15, min_val=5, max_val=50):
    random_list = []

    for i in range(number_values):
        n = random.randint(min_val, max_val)
        random_list.append(n)

    a = sum(random_list)
    mean = round(a / number_values, 2)

    _var = 0
    for i in range(number_values):
        _var += (random_list[i] - mean)**2

    standardDeviation = round(_var / number_values, 2)
    variance = round((_var / number_values) ** 0.5, 2)

    problem = f"Find the mean,standard deviation and variance for the data ${', '.join(map(str, random_list))}$"
    solution = f"The Mean is ${mean}$, Standard Deviation is ${standardDeviation}$, Variance is ${variance}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p5
def dice_sum_probability(max_dice=3):
    a = random.randint(1, max_dice)
    b = random.randint(a, 6 * a)

    count = 0
    for i in [1, 2, 3, 4, 5, 6]:
        if a == 1:
            if i == b:
                count = count + 1
        elif a == 2:
            for j in [1, 2, 3, 4, 5, 6]:
                if i + j == b:
                    count = count + 1
        elif a == 3:
            for j in [1, 2, 3, 4, 5, 6]:
                for k in [1, 2, 3, 4, 5, 6]:
                    if i + j + k == b:
                        count = count + 1

    problem = f"If ${a}$ dice are rolled at the same time, the probability of getting a sum of ${b} =$"
    solution = rf"\frac{{{count}}}{{{6**a}}}"
    return problem, solution
##### Segment END

##### Segment BEGIN p6
def mean_median(max_length=10):
    randomlist = random.sample(range(1, 99), max_length)
    total = 0
    for n in randomlist:
        total = total + n
    mean = total / 10
    randomlist.sort()
    median = (randomlist[4] + randomlist[5]) / 2

    problem = f"Given the series of numbers ${randomlist}$. Find the arithmatic mean and median of the series"
    solution = f"Arithmetic mean of the series is ${mean}$ and arithmetic median of this series is ${median}$"
    return problem, solution
##### Segment END

##### Segment BEGIN p7
def permutation(max_lengthgth=20):
    a = random.randint(10, max_lengthgth)
    b = random.randint(0, 9)
    solution = int(math.factorial(a) / (math.factorial(a - b)))

    problem = f"Number of Permutations from ${a}$ objects picked ${b}$ at a time is: "
    return problem, f"${solution}$"
##### Segment END

##### Segment IGNORE BEGIN
def assert_equal(a, b):
    if a != b:
        raise Exception("MyLogError MISMATCH")

def test_p1():
    a, b = combinations()
    assert_equal(a, 'Find the number of combinations from $14$ objects picked $8$ at a time.')
    assert_equal(b, '$3003$')
test_p1()

def test_p2():
    a, b = conditional_probability()
    assert_equal(a, 'Someone tested positive for a nasty disease which only $0.61$% of the population have. Test sensitivity (true positive) is equal to $SN=99.29$% whereas test specificity (true negative) $SP=94.91$%. What is the probability that this guy really has that disease?')
    assert_equal(b, '$10.69$%')
test_p2()

def test_p3():
    a, b = confidence_interval()
    assert_equal(a, 'The confidence interval for sample $[229, 231, 242, 225, 252, 290, 270, 227, 231, 258, 296, 243, 247, 232, 276, 272, 237, 240, 235, 220, 238, 292, 289]$ with $80$% confidence is')
    assert_equal(b, '$(257.29, 244.62)$')
test_p3()

def test_p4():
    a, b = data_summary()
    assert_equal(a, 'Find the mean,standard deviation and variance for the data $40, 29, 33, 26, 26, 36, 7, 43, 16, 25, 17, 25, 28, 11, 13$')
    assert_equal(b, 'The Mean is $25.0$, Standard Deviation is $104.67$, Variance is $10.23$')
test_p4()

def test_p5():
    a, b = dice_sum_probability()
    assert_equal(a, 'If $2$ dice are rolled at the same time, the probability of getting a sum of $2 =$')
    assert_equal(b, '\\frac{1}{36}')
test_p5()

def test_p6():
    a, b = mean_median()
    assert_equal(a, 'Given the series of numbers $[2, 2, 11, 16, 19, 25, 26, 38, 46, 78]$. Find the arithmatic mean and median of the series')
    assert_equal(b, 'Arithmetic mean of the series is $26.3$ and arithmetic median of this series is $22.0$')
test_p6()

def test_p7():
    a, b = permutation()
    assert_equal(a, 'Number of Permutations from $12$ objects picked $8$ at a time is: ')
    assert_equal(b, '$19958400$')
test_p7()
##### Segment IGNORE END