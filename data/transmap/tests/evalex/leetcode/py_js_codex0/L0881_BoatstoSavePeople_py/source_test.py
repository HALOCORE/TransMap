
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [[1, 2], 3]
    # output: 1
    # EXPLANATION:  1 boat (1, 2)
    ,
    # example 2
    [[3, 2, 2, 1], 3]
    # output: 3
    # EXPLANATION:  3 boats (1, 2), (2) and (3)
    ,
    # example 3
    [[3, 5, 3, 4], 5]
    # output: 4
    # EXPLANATION:  4 boats (3), (3), (4), (5)
    ,
  ]
  for i, parameters_set in enumerate(param):
    idx = i
    mylog(0, idx)
    result = f_gold(* parameters_set)
    myexactlog(1, result)


"-----------------"
#TESTED_PROGRAM
"-----------------"
test()

