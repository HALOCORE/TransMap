##### Segment BEGIN basic
import re
from functools import reduce

_SPACE_PATTERN = re.compile("\\s+")


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

##### Segment BEGIN SoDice
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

class SorensenDice(ShingleBased, NormalizedStringDistance, NormalizedStringSimilarity):

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
        return 2.0 * inter / (len(profile0) + len(profile1))

##### Segment END

##### Segment BEGIN WeightedLev
def default_insertion_cost(char):
    return 1.0


def default_deletion_cost(char):
    return 1.0


def default_substitution_cost(char_a, char_b):
    return 1.0


class WeightedLevenshtein(StringDistance):

    def __init__(self,
                 substitution_cost_fn=default_substitution_cost,
                 insertion_cost_fn=default_insertion_cost,
                 deletion_cost_fn=default_deletion_cost,
                 ):
        self.substitution_cost_fn = substitution_cost_fn
        self.insertion_cost_fn = insertion_cost_fn
        self.deletion_cost_fn = deletion_cost_fn

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        if len(s0) == 0:
            return reduce(lambda cost, char: cost + self.insertion_cost_fn(char), s1, 0)
        if len(s1) == 0:
            return reduce(lambda cost, char: cost + self.deletion_cost_fn(char), s0, 0)

        v0, v1 = [0.0] * (len(s1) + 1), [0.0] * (len(s1) + 1)

        v0[0] = 0
        for i in range(1, len(v0)):
            v0[i] = v0[i - 1] + self.insertion_cost_fn(s1[i - 1])

        for i in range(len(s0)):
            s0i = s0[i]
            deletion_cost = self.deletion_cost_fn(s0i)
            v1[0] = v0[0] + deletion_cost

            for j in range(len(s1)):
                s1j = s1[j]
                cost = 0
                if s0i != s1j:
                    cost = self.substitution_cost_fn(s0i, s1j)
                insertion_cost = self.insertion_cost_fn(s1j)
                v1[j + 1] = min(v1[j] + insertion_cost, v0[j + 1] + deletion_cost, v0[j] + cost)
            v0, v1 = v1, v0

        return v0[len(s1)]
##### Segment END


##### Segment IGNORE BEGIN
def assert_equal(a, b):
    if a != b:
        raise Exception("MyLogError MISMATCH")

def test_sorensen_dice():
    a = SorensenDice(2)
    # s0 = ""
    # s1 = ""
    s2 = "上海"
    s3 = "上海市"
    distance_format = "distance: {:.4}\t between {} and {}"
    similarity_format = "strsim: {:.4}\t between {} and {}"
    # print(distance_format.format(str(a.distance(s0, s1)), s0, s1))
    # print(distance_format.format(str(a.distance(s0, s2)), s0, s2))
    # print(distance_format.format(str(a.distance(s0, s3)), s0, s3))
    # print(distance_format.format(str(a.distance(s1, s2)), s1, s2))
    # print(distance_format.format(str(a.distance(s1, s3)), s1, s3))
    # print(distance_format.format(str(a.distance(s2, s3)), s2, s3))

    assert_equal(round(a.distance(s2, s3), 2), 0.33)

    # print(similarity_format.format(str(a.strsim(s0, s1)), s0, s1))
    # print(similarity_format.format(str(a.strsim(s0, s2)), s0, s2))
    # print(similarity_format.format(str(a.strsim(s0, s3)), s0, s3))
    # print(similarity_format.format(str(a.strsim(s1, s2)), s1, s2))
    # print(similarity_format.format(str(a.strsim(s1, s3)), s1, s3))
    # print(similarity_format.format(str(a.similarity(s2, s3)), s2, s3))
    
    assert_equal(round(a.similarity(s2, s3), 2), 0.67)

def test_weighted_levenshtein():
    a = WeightedLevenshtein()
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



test_sorensen_dice()
test_weighted_levenshtein()

##### Segment IGNORE END