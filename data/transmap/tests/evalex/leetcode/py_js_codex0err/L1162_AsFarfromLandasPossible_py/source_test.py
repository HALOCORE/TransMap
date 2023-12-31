
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]]
    # output: 2
    # EXPLANATION:  The cell (1, 1) is as far as possible from all the land with distance 2.
    ,
    # example 2
    [[[1, 0, 0], [0, 0, 0], [0, 0, 0]]]
    # output: 4
    # EXPLANATION:  The cell (2, 2) is as far as possible from all the land with distance 4.
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

