
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    ["K1:L2"]
    # output: ["K1","K2","L1","L2"]
    # EXPLANATION:  The above diagram shows the cells which should be present in the list. The red arrows denote the order in which the cells should be presented.
    ,
    # example 2
    ["A1:F1"]
    # output: ["A1","B1","C1","D1","E1","F1"]
    # EXPLANATION:  The above diagram shows the cells which should be present in the list. The red arrow denotes the order in which the cells should be presented.
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

