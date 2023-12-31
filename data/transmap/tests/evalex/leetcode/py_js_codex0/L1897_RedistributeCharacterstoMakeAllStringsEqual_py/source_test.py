
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [["abc", "aabc", "bc"]]
    # output: true
    # EXPLANATION:  Move the first 'a' in <code>words[1] to the front of words[2], to make </code><code>words[1]</code> = "abc" and words[2] = "abc". All the strings are now equal to "abc", so return <code>true</code>.
    ,
    # example 2
    [["ab", "a"]]
    # output: false
    # EXPLANATION:  It is impossible to make all the strings equal using the operation.
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

