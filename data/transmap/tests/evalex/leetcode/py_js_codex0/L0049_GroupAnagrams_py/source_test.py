
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [["eat", "tea", "tan", "ate", "nat", "bat"]]
    # output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    ,
    # example 2
    [[""]]
    # output: [[""]]
    ,
    # example 3
    [["a"]]
    # output: [["a"]]
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

