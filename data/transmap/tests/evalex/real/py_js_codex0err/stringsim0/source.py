
##### Segment BEGIN Basic
class StringDistance:

    def distance(self, s0, s1):
        raise NotImplementedError()


class NormalizedStringDistance(StringDistance):

    def distance(self, s0, s1):
        raise NotImplementedError()


class MetricStringDistance(StringDistance):

    def distance(self, s0, s1):
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

##### Segment BEGIN LongestCommonSub
class LongestCommonSubsequence(StringDistance):
    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        return len(s0) + len(s1) - 2 * self.length(s0, s1)

    @staticmethod
    def length(s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        s0_len, s1_len = len(s0), len(s1)
        x, y = s0[:], s1[:]
        matrix = [[0] * (s1_len + 1) for _ in range(s0_len + 1)]
        for i in range(1, s0_len + 1):
            for j in range(1, s1_len + 1):
                if x[i - 1] == y[j - 1]:
                    matrix[i][j] = matrix[i - 1][j - 1] + 1
                else:
                    matrix[i][j] = max(matrix[i][j - 1], matrix[i - 1][j])
        return matrix[s0_len][s1_len]

##### Segment END

##### Segment BEGIN MetricLCS
class MetricLCS(MetricStringDistance, NormalizedStringDistance):

    def __init__(self):
        self.lcs = LongestCommonSubsequence()

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        max_len = int(max(len(s0), len(s1)))
        if max_len == 0:
            return 0.0
        return 1.0 - (1.0 * self.lcs.length(s0, s1)) / max_len

##### Segment END

##### Segment BEGIN NGram
class NGram(NormalizedStringDistance):

    def __init__(self, n=2):
        self.n = n

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0

        special = '\n'
        sl = len(s0)
        tl = len(s1)

        if sl == 0 or tl == 0:
            return 1.0

        cost = 0
        if sl < self.n or tl < self.n:
            for i in range(min(sl, tl)):
                if s0[i] == s1[i]:
                    cost += 1
            return 1.0 - cost / max(sl, tl)

        sa = [''] * (sl + self.n - 1)

        for i in range(len(sa)):
            if i < self.n - 1:
                sa[i] = special
            else:
                sa[i] = s0[i - self.n + 1]

        p = [0.0] * (sl + 1)
        d = [0.0] * (sl + 1)
        t_j = [''] * self.n
        for i in range(sl + 1):
            p[i] = 1.0 * i

        for j in range(1, tl + 1):
            if j < self.n:
                for ti in range(self.n - j):
                    t_j[ti] = special
                for ti in range(self.n - j, self.n):
                    t_j[ti] = s1[ti - (self.n - j)]
            else:
                t_j = s1[j - self.n:j]

            d[0] = 1.0 * j
            for i in range(sl + 1):
                cost = 0
                tn = self.n
                for ni in range(self.n):
                    if sa[i - 1 + ni] != t_j[ni]:
                        cost += 1
                    elif sa[i - 1 + ni] == special:
                        tn -= 1
                ec = cost / tn
                d[i] = min(d[i - 1] + 1, p[i] + 1, p[i - 1] + ec)
            p, d = d, p

        return p[sl] / max(tl, sl)


##### Segment END

##### Segment BEGIN Damerau
class Damerau(MetricStringDistance):

    def distance(self, s0, s1):
        if s0 is None:
            raise TypeError("Argument s0 is NoneType.")
        if s1 is None:
            raise TypeError("Argument s1 is NoneType.")
        if s0 == s1:
            return 0.0
        inf = int(len(s0) + len(s1))
        da = dict()
        for i in range(len(s0)):
            da[s0[i]] = str(0)
        for i in range(len(s1)):
            da[s1[i]] = str(0)
        h = [[0] * (len(s1) + 2) for _ in range(len(s0) + 2)]
        for i in range(len(s0) + 1):
            h[i + 1][0] = inf
            h[i + 1][1] = i
        for j in range(len(s1) + 1):
            h[0][j + 1] = inf
            h[1][j + 1] = j
        for i in range(1, len(s0) + 1):
            db = 0
            for j in range(1, len(s1) + 1):
                i1 = int(da[s1[j - 1]])
                j1 = db

                cost = 1
                if s0[i - 1] == s1[j - 1]:
                    cost = 0
                    db = j
                h[i + 1][j + 1] = min(h[i][j] + cost,
                                      h[i + 1][j] + 1,
                                      h[i][j + 1] + 1,
                                      h[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1))
            da[s0[i - 1]] = str(i)

        return h[len(s0) + 1][len(s1) + 1]


##### Segment END


##### Segment IGNORE BEGIN
def assert_equal(a, b):
    if a != b:
        raise Exception("MyLogError MISMATCH")

def test_levenshtein():
    a = Levenshtein()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 2)
    assert_equal(a.distance(s0, s3), 3)
    assert_equal(a.distance(s1, s2), 2)
    assert_equal(a.distance(s1, s3), 3)
    assert_equal(a.distance(s2, s3), 1)


def test_longest_common_subsequence():
    a = LongestCommonSubsequence()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    assert_equal(0, a.distance(s0, s1))
    assert_equal(2, a.distance(s0, s2))
    assert_equal(3, a.distance(s0, s3))
    assert_equal(1, a.distance(s2, s3))
    assert_equal(2, a.length(s2, s3))
    assert_equal(4, a.distance('AGCAT', 'GAC'))
    assert_equal(2, a.length('AGCAT', 'GAC'))

def test_metric_lcs():
    a = MetricLCS()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 1.0)
    assert_equal(a.distance(s0, s3), 1.0)
    assert_equal(a.distance(s1, s2), 1.0)
    assert_equal(a.distance(s1, s3), 1.0)
    assert_equal(round(a.distance(s2, s3), 2), 0.33)

def test_ngram():
    a = NGram(2)
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 1.0)
    assert_equal(a.distance(s0, s3), 1.0)
    assert_equal(a.distance(s1, s2), 1.0)
    assert_equal(a.distance(s1, s3), 1.0)
    assert_equal(round(a.distance(s2, s3), 2), 0.33)


def test_damerau():
    a = Damerau()
    s0 = ""
    s1 = ""
    s2 = "上海"
    s3 = "上海市"
    assert_equal(a.distance(s0, s1), 0.0)
    assert_equal(a.distance(s0, s2), 2)
    assert_equal(a.distance(s0, s3), 3)
    assert_equal(a.distance(s1, s2), 2)
    assert_equal(a.distance(s1, s3), 3)
    assert_equal(a.distance(s2, s3), 1)

test_levenshtein()
test_longest_common_subsequence()
test_metric_lcs()
test_ngram()
test_damerau()

##### Segment IGNORE END