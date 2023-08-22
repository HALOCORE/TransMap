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

##### Segment BEGIN Cosine
import math
class Cosine(ShingleBased, NormalizedStringDistance,
             NormalizedStringSimilarity):

    def __init__(self, k):
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
        if len(s0) < self.get_k() or len(s1) < self.get_k():
            return 0.0
        profile0 = self.get_profile(s0)
        profile1 = self.get_profile(s1)
        return self._dot_product(profile0, profile1) / (self._norm(profile0) * self._norm(profile1))

    def similarity_profiles(self, profile0, profile1):
        return self._dot_product(profile0, profile1) / (self._norm(profile0) * self._norm(profile1))

    @staticmethod
    def _dot_product(profile0, profile1):
        small = profile1
        large = profile0
        if len(profile0) < len(profile1):
            small = profile0
            large = profile1
        agg = 0.0
        for k, v in small.items():
            i = large.get(k)
            if not i:
                continue
            agg += 1.0 * v * i
        return agg

    @staticmethod
    def _norm(profile):
        agg = 0.0
        for k, v in profile.items():
            agg += 1.0 * v * v
        return math.sqrt(agg)


##### Segment END

##### Segment BEGIN Jaccard
class Jaccard(ShingleBased, MetricStringDistance, NormalizedStringDistance, NormalizedStringSimilarity):

    def __init__(self, k):
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
        if len(s0) < self.get_k() or len(s1) < self.get_k():
            return 0.0
        profile0 = self.get_profile(s0)
        profile1 = self.get_profile(s1)
        union = set()
        for ite in profile0.keys():
            union.add(ite)
        for ite in profile1.keys():
            union.add(ite)
        inter = int(len(profile0.keys()) + len(profile1.keys()) - len(union))
        return 1.0 * inter / len(union)


##### Segment END

##### Segment BEGIN JaroWinkler-1
class JaroWinkler(NormalizedStringSimilarity, NormalizedStringDistance):

    def __init__(self, threshold=0.7):
        self.threshold = threshold
        self.three = 3
        self.jw_coef = 0.1

    def get_threshold(self):
        return self.threshold

    def similarity(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 1.0
        mtp = self.matches(s0, s1)
        m = mtp[0]
        if m == 0:
            return 0.0
        j = (m / len(s0) + m / len(s1) + (m - mtp[1]) / m) / self.three
        jw = j
        if j > self.get_threshold():
            jw = j + min(self.jw_coef, 1.0 / mtp[self.three]) * mtp[2] * (1 - j)
        return jw

    def distance(self, s0, s1):
        return 1.0 - self.similarity(s0, s1)

##### Segment END

##### Segment BEGIN JaroWinkler-2
    @staticmethod
    def matches(s0, s1):
        if len(s0) > len(s1):
            max_str = s0
            min_str = s1
        else:
            max_str = s1
            min_str = s0
        ran = int(max(len(max_str) / 2 - 1, 0))
        match_indexes = [-1] * len(min_str)
        match_flags = [False] * len(max_str)
        matches = 0
        for mi in range(len(min_str)):
            c1 = min_str[mi]
            for xi in range(max(mi - ran, 0), min(mi + ran + 1, len(max_str))):
                if not match_flags[xi] and c1 == max_str[xi]:
                    match_indexes[mi] = xi
                    match_flags[xi] = True
                    matches += 1
                    break

        ms0, ms1 = [0] * matches, [0] * matches
        si = 0
        for i in range(len(min_str)):
            if match_indexes[i] != -1:
                ms0[si] = min_str[i]
                si += 1
        si = 0
        for j in range(len(max_str)):
            if match_flags[j]:
                ms1[si] = max_str[j]
                si += 1
        transpositions = 0
        for mi in range(len(ms0)):
            if ms0[mi] != ms1[mi]:
                transpositions += 1
        prefix = 0
        for mi in range(len(min_str)):
            if s0[mi] == s1[mi]:
                prefix += 1
            else:
                break
        return [matches, int(transpositions / 2), prefix, len(max_str)]


##### Segment END


##### Segment IGNORE BEGIN
def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")
  
def test_cosine():
    cos = Cosine(1)
    s = ['', ' ', 'Shanghai', 'ShangHai', 'Shang Hai']
    # for i in range(len(s)):
    #     for j in range(i, len(s)):
    #         print('dis between \'%s\' and \'%s\': %.4f' % (s[i], s[j], cos.distance(s[i], s[j])))
    #         print('sim between \'%s\' and \'%s\': %.4f' % (s[i], s[j], cos.similarity(s[i], s[j])))
    assert_equal(0.0000, round(cos.distance(s[0], s[0]), 4))
    assert_equal(1.0000, round(cos.similarity(s[0], s[0]), 4))
    assert_equal(1.0000, round(cos.distance(s[0], s[1]), 4))
    assert_equal(0.0000, round(cos.similarity(s[0], s[1]), 4))
    assert_equal(1.0000, round(cos.distance(s[0], s[2]), 4))
    assert_equal(0.0000, round(cos.similarity(s[0], s[2]), 4))
    assert_equal(1.0000, round(cos.distance(s[0], s[3]), 4))
    assert_equal(0.0000, round(cos.similarity(s[0], s[3]), 4))
    assert_equal(1.0000, round(cos.distance(s[0], s[4]), 4))
    assert_equal(0.0000, round(cos.similarity(s[0], s[4]), 4))

    assert_equal(0.0000, round(cos.distance(s[1], s[1]), 4))
    assert_equal(1.0000, round(cos.similarity(s[1], s[1]), 4))
    assert_equal(1.0000, round(cos.distance(s[1], s[2]), 4))
    assert_equal(0.0000, round(cos.similarity(s[1], s[2]), 4))
    assert_equal(1.0000, round(cos.distance(s[1], s[3]), 4))
    assert_equal(0.0000, round(cos.similarity(s[1], s[3]), 4))
    assert_equal(0.6985, round(cos.distance(s[1], s[4]), 4))
    assert_equal(0.3015, round(cos.similarity(s[1], s[4]), 4))

    assert_equal(0.0000, round(cos.distance(s[2], s[2]), 4))
    assert_equal(1.0000, round(cos.similarity(s[2], s[2]), 4))
    assert_equal(0.0871, round(cos.distance(s[2], s[3]), 4))
    assert_equal(0.9129, round(cos.similarity(s[2], s[3]), 4))
    assert_equal(0.1296, round(cos.distance(s[2], s[4]), 4))
    assert_equal(0.8704, round(cos.similarity(s[2], s[4]), 4))

    assert_equal(0.0000, round(cos.distance(s[3], s[3]), 4))
    assert_equal(1.0000, round(cos.similarity(s[3], s[3]), 4))
    assert_equal(0.0465, round(cos.distance(s[3], s[4]), 4))
    assert_equal(0.9535, round(cos.similarity(s[3], s[4]), 4))
    
    assert_equal(0.0000, round(cos.distance(s[4], s[4]), 4))
    assert_equal(1.0000, round(cos.similarity(s[4], s[4]), 4))


def test_jaccard():
    jaccard = Jaccard(1)
    s = ['', ' ', 'Shanghai', 'ShangHai', 'Shang Hai']
    # for i in range(len(s)):
    #     for j in range(i, len(s)):
    #         print('dis between \'%s\' and \'%s\': %.4f' % (s[i], s[j], jaccard.distance(s[i], s[j])))
    #         print('sim between \'%s\' and \'%s\': %.4f' % (s[i], s[j], jaccard.similarity(s[i], s[j])))

    assert_equal(0.0000, round(jaccard.distance(s[0], s[0]), 4))
    assert_equal(1.0000, round(jaccard.similarity(s[0], s[0]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[0], s[1]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[0], s[1]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[0], s[2]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[0], s[2]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[0], s[3]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[0], s[3]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[0], s[4]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[0], s[4]), 4))

    assert_equal(0.0000, round(jaccard.distance(s[1], s[1]), 4))
    assert_equal(1.0000, round(jaccard.similarity(s[1], s[1]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[1], s[2]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[1], s[2]), 4))
    assert_equal(1.0000, round(jaccard.distance(s[1], s[3]), 4))
    assert_equal(0.0000, round(jaccard.similarity(s[1], s[3]), 4))
    assert_equal(0.8750, round(jaccard.distance(s[1], s[4]), 4))
    assert_equal(0.1250, round(jaccard.similarity(s[1], s[4]), 4))

    assert_equal(0.0000, round(jaccard.distance(s[2], s[2]), 4))
    assert_equal(1.0000, round(jaccard.similarity(s[2], s[2]), 4))
    assert_equal(0.1429, round(jaccard.distance(s[2], s[3]), 4))
    assert_equal(0.8571, round(jaccard.similarity(s[2], s[3]), 4))
    assert_equal(0.2500, round(jaccard.distance(s[2], s[4]), 4))
    assert_equal(0.7500, round(jaccard.similarity(s[2], s[4]), 4))

    assert_equal(0.0000, round(jaccard.distance(s[3], s[3]), 4))
    assert_equal(1.0000, round(jaccard.similarity(s[3], s[3]), 4))
    assert_equal(0.1250, round(jaccard.distance(s[3], s[4]), 4))
    assert_equal(0.8750, round(jaccard.similarity(s[3], s[4]), 4))
    
    assert_equal(0.0000, round(jaccard.distance(s[4], s[4]), 4))
    assert_equal(1.0000, round(jaccard.similarity(s[4], s[4]), 4))


def test_jarowinkler():
    a = JaroWinkler()
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
    assert_equal(round(a.distance(s2, s3), 4), 0.0889)

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
    assert_equal(round(a.similarity(s2, s3), 4), 0.9111)


test_cosine()
test_jaccard()
test_jarowinkler()

##### Segment IGNORE END