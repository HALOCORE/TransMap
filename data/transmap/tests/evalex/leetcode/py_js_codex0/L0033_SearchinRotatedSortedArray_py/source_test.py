
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [[4, 5, 6, 7, 0, 1, 2], 0]
    # output: 4
    ,
    # example 2
    [[4, 5, 6, 7, 0, 1, 2], 3]
    # output: -1
    ,
    # example 3
    [[1], 0]
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

