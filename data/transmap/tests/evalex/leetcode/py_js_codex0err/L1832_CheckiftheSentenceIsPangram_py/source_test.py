
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    ["thequickbrownfoxjumpsoverthelazydog"]
    # output: true
    # EXPLANATION:  sentence contains at least one of every letter of the English alphabet.
    ,
    # example 2
    ["leetcode"]
    # output: false
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

