
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2]
    # output: 2
    ,
    # example 2
    [[[1, 2, 1]], 2, 1]
    # output: 1
    ,
    # example 3
    [[[1, 2, 1]], 2, 2]
    # output: -1
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

