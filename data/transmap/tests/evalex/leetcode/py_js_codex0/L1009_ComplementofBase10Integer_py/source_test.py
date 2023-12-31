
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [5]
    # output: 2
    # EXPLANATION:  5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
    ,
    # example 2
    [7]
    # output: 0
    # EXPLANATION:  7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
    ,
    # example 3
    [10]
    # output: 5
    # EXPLANATION:  10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
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

