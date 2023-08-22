
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"]
    # output: ["AAAAACCCCC","CCCCCAAAAA"]
    ,
    # example 2
    ["AAAAAAAAAAAAA"]
    # output: ["AAAAAAAAAA"]
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

