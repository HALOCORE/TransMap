##### Segment IGNORE BEGIN
"""
NOTE: Anything in Segment IGNORE will not be translated.
Anything in a normal segment (such as segment my_first_segment) below will be translated one by one 
and filled into the target template (target_tmpl.js).
"""
##### Segment IGNORE END

##### Segment BEGIN my_first_segment
def generate_square_list(n):
    return [x*x for x in range(n)]
##### Segment END

##### Segment BEGIN my_second_segment
# def accumulate_list(ls):
#     acc_list = []
#     acc = 0
#     for x in ls:
#         acc += x
#         acc_list.append(acc)
#     return acc_list
##### Segment END

##### Segment IGNORE BEGIN
"""
NOTE: ! the unit tests below is in an IGNORE segment --- The user is responsible for providing the correct tests in both languages.
For the unit tests on the JavaScript side, please check the target template (target_tmpl.js) and make sure it is consistent with the Python side.
You can use AI tools (such as chatGPT) to help with converting the unit tests, but for now it is not automated.
"""
def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")
  
def assert_almost_equal(a, b):
    if abs(a-b) > 0.0001:
        raise Exception("MyLogError MISMATCH")

def assert_iter_almost_equal(iter1, iter2):
    iter1 = list(iter1)
    iter2 = list(iter2)
    print("[assert_iter_almost_equal] ", iter1, " and ", iter2)
    if len(iter1) != len(iter2): 
        raise Exception("MyLogError MISMATCH")
    for a, b in zip(iter1, iter2):
        assert_almost_equal(a, b)

def test():
    assert_iter_almost_equal(generate_square_list(5), [0, 1, 4, 9, 16])
    # assert_iter_almost_equal(accumulate_list([1, 2, 3, 4, 5]), [1, 3, 6, 10, 15])

test()
##### Segment IGNORE END