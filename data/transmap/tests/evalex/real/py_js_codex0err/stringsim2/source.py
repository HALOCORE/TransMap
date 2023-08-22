##### Segment BEGIN Basic
import re

_SPACE_PATTERN = re.compile("\\s+")

class ShingleBased:

    def __init__(self, k=3):
        self.k = k

    def get_k(self):
        return self.k

    def get_profile(self, string):
        shingles = dict()
        no_space_str = _SPACE_PATTERN.sub(" ", string)
        for i in range(len(no_space_str) - self.k + 1):
            shingle = no_space_str[i:i + self.k]
            old = shingles.get(shingle)
            if old:
                shingles[str(shingle)] = int(old + 1)
            else:
                shingles[str(shingle)] = 1
        return shingles

class StringDistance:

    def distance(self, s0, s1):
        raise NotImplementedError()

class NormalizedStringDistance(StringDistance):

    def distance(self, s0, s1):
        raise NotImplementedError()

class MetricStringDistance(StringDistance):

    def distance(self, s0, s1):
        raise NotImplementedError()

class StringSimilarity:

    def similarity(self, s0, s1):
        raise NotImplementedError()

class NormalizedStringSimilarity(StringSimilarity):

    def similarity(self, s0, s1):
        raise NotImplementedError()

##### Segment END

##### Segment BEGIN Levenshtein
class Levenshtein(MetricStringDistance):

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        if len(s0) == 0:
            return len(s1)
        if len(s1) == 0:
            return len(s0)

        v0 = [0] * (len(s1) + 1)
        v1 = [0] * (len(s1) + 1)

        for i in range(len(v0)):
            v0[i] = i

        for i in range(len(s0)):
            v1[0] = i + 1
            for j in range(len(s1)):
                cost = 1
                if s0[i] == s1[j]:
                    cost = 0
                v1[j + 1] = min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost)
            v0, v1 = v1, v0

        return v0[len(s1)]

##### Segment END

##### Segment BEGIN NormalizedLev
class NormalizedLevenshtein(NormalizedStringDistance, NormalizedStringSimilarity):

    def __init__(self):
        self.levenshtein = Levenshtein()

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        m_len = max(len(s0), len(s1))
        if m_len == 0:
            return 0.0
        return self.levenshtein.distance(s0, s1) / m_len

    def similarity(self, s0, s1):
        return 1.0 - self.distance(s0, s1)

##### Segment END

##### Segment BEGIN OptStrAlign
class OptimalStringAlignment(StringDistance):

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0

        n, m = len(s0), len(s1)
        if n == 0:
            return 1.0 * n
        if m == 0:
            return 1.0 * m

        d = [[0] * (m + 2) for _ in range(n + 2)]
        for i in range(n + 1):
            d[i][0] = i
        for j in range(m + 1):
            d[0][j] = j

        for i in range(1, n + 1):
            for j in range(1, m + 1):
                cost = 1
                if s0[i - 1] == s1[j - 1]:
                    cost = 0
                d[i][j] = min(d[i - 1][j - 1] + cost, d[i][j - 1] + 1, d[i - 1][j] + 1)

                if i > 1 and j > 1 and s0[i - 1] == s1[j - 2] and s0[i - 2] == s1[j - 1]:
                    d[i][j] = min(d[i][j], d[i - 2][j - 2] + cost)

        return d[n][m]

##### Segment END

##### Segment BEGIN OverlapCoef
class OverlapCoefficient(ShingleBased, NormalizedStringDistance, NormalizedStringSimilarity):

    def __init__(self, k=3):
        super().__init__(k)

    def distance(self, s0, s1):
        return 1.0 - self.similarity(s0, s1)

    def similarity(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 1.0
        union = set()
        profile0, profile1 = self.get_profile(s0), self.get_profile(s1)
        for k in profile0.keys():
            union.add(k)
        for k in profile1.keys():
            union.add(k)
        inter = int(len(profile0.keys()) + len(profile1.keys()) - len(union))
        return inter / min(len(profile0), len(profile1))

##### Segment END

##### Segment BEGIN QGram
class QGram(ShingleBased, StringDistance):

    def __init__(self, k=3):
        super().__init__(k)

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0

        profile0 = self.get_profile(s0)
        profile1 = self.get_profile(s1)
        return self.distance_profile(profile0, profile1)

    @staticmethod
    def distance_profile(profile0, profile1):
        union = set()
        for k in profile0.keys():
            union.add(k)
        for k in profile1.keys():
            union.add(k)
        agg = 0
        for k in union:
            v0, v1 = 0, 0
            if profile0.get(k) is not None:
                v0 = int(profile0.get(k))
            if profile1.get(k) is not None:
                v1 = int(profile1.get(k))
            agg += abs(v0 - v1)
        return agg


##### Segment END

##### Segment IGNORE BEGIN

def assert_equal(a, b):
    if a != b:
        raise Exception("MyLogError MISMATCH")


def test_normalized_levenshtein():
    a = NormalizedLevenshtein()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    # distance_format = "distance: {:.4}\t between {} and {}"
    # similarity_format = "strsim: {:.4}\t between {} and {}"
    # print(distance_format.format(str(a.distance(s0, s1)), s0, s1))
    # print(distance_format.format(str(a.distance(s0, s2)), s0, s2))
    # print(distance_format.format(str(a.distance(s0, s3)), s0, s3))
    # print(distance_format.format(str(a.distance(s1, s2)), s1, s2))
    # print(distance_format.format(str(a.distance(s1, s3)), s1, s3))
    # print(distance_format.format(str(a.distance(s2, s3)), s2, s3))

    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 1.0)
    assert_equal(a.distance(s0, s3), 1.0)
    assert_equal(a.distance(s1, s2), 1.0)
    assert_equal(a.distance(s1, s3), 1.0)
    assert_equal(round(a.distance(s2, s3), 2), 0.33)

    # print(similarity_format.format(str(a.similarity(s0, s1)), s0, s1))
    # print(similarity_format.format(str(a.similarity(s0, s2)), s0, s2))
    # print(similarity_format.format(str(a.similarity(s0, s3)), s0, s3))
    # print(similarity_format.format(str(a.similarity(s1, s2)), s1, s2))
    # print(similarity_format.format(str(a.similarity(s1, s3)), s1, s3))
    # print(similarity_format.format(str(a.similarity(s2, s3)), s2, s3))

    assert_equal(a.similarity(s0, s1), 1.0)
    assert_equal(a.similarity(s0, s2), 0.0)
    assert_equal(a.similarity(s0, s3), 0.0)
    assert_equal(a.similarity(s1, s2), 0.0)
    assert_equal(a.similarity(s1, s3), 0.0)
    assert_equal(round(a.similarity(s2, s3), 2), 0.67)

def test_optimal_string_alignment():
    a = OptimalStringAlignment()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    # distance_format = "distance: {:.4}\t between {} and {}"
    # print(distance_format.format(str(a.distance(s0, s1)), s0, s1))
    # print(distance_format.format(str(a.distance(s0, s2)), s0, s2))
    # print(distance_format.format(str(a.distance(s0, s3)), s0, s3))
    # print(distance_format.format(str(a.distance(s1, s2)), s1, s2))
    # print(distance_format.format(str(a.distance(s1, s3)), s1, s3))
    # print(distance_format.format(str(a.distance(s2, s3)), s2, s3))

    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 0.0)
    assert_equal(a.distance(s0, s3), 0.0)
    assert_equal(a.distance(s1, s2), 0.0)
    assert_equal(a.distance(s1, s3), 0.0)
    assert_equal(round(a.distance(s2, s3), 2), 1)

def test_overlap_coefficient_onestringissubsetofother_return0():
    sim = OverlapCoefficient(3)
    s1, s2 = "eat", "eating"
    actual = sim.distance(s1, s2)
    # print("distance: {:.4}\t between '{}' and '{}'".format(str(actual), s1, s2))
    assert_equal(0, actual)

def test_overlap_coefficient_onestringissubset_return1():
    sim = OverlapCoefficient(3)
    s1, s2 = "eat", "eating"
    actual = sim.similarity(s1, s2)
    # print("strsim: {:.4}\t between '{}' and '{}'".format(str(actual), s1, s2))
    assert_equal(1, actual)

def test_overlap_coefficient_onestringissubsetofother_return1():
    sim = OverlapCoefficient(3)
    s1, s2 = "eat", "eating"
    actual = sim.similarity(s1, s2)
    # print("strsim: {:.4}\t between '{}' and '{}'".format(str(actual), s1, s2))
    assert_equal(1, actual)

def test_overlap_coefficient_halfsimilar_return1():
    sim = OverlapCoefficient(2)
    s1, s2 = "car", "bar"
    assert_equal(1 / 2, sim.similarity(s1, s2))
    assert_equal(1 / 2, sim.distance(s1, s2))

def test_qgram():
    a = QGram(1)
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    # distance_format = "distance: {:.4}\t between {} and {}"
    # print(distance_format.format(str(a.distance(s0, s1)), s0, s1))
    # print(distance_format.format(str(a.distance(s0, s2)), s0, s2))
    # print(distance_format.format(str(a.distance(s0, s3)), s0, s3))
    # print(distance_format.format(str(a.distance(s1, s2)), s1, s2))
    # print(distance_format.format(str(a.distance(s1, s3)), s1, s3))
    # print(distance_format.format(str(a.distance(s2, s3)), s2, s3))

    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 2)
    assert_equal(a.distance(s0, s3), 3)
    assert_equal(a.distance(s1, s2), 2)
    assert_equal(a.distance(s1, s3), 3)
    assert_equal(a.distance(s2, s3), 1)


test_normalized_levenshtein()
test_optimal_string_alignment()
test_overlap_coefficient_onestringissubsetofother_return0()
test_overlap_coefficient_onestringissubset_return1()
test_overlap_coefficient_onestringissubsetofother_return1()
test_overlap_coefficient_halfsimilar_return1()
test_qgram()

##### Segment IGNORE END