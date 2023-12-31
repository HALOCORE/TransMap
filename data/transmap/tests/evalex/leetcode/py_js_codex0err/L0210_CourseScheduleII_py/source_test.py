
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    [2, [[1, 0]]]
    # output: [0,1]
    # EXPLANATION:  There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
    ,
    # example 2
    [4, [[1, 0], [2, 0], [3, 1], [3, 2]]]
    # output: [0,2,1,3]
    # EXPLANATION:  There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
    ,
    # example 3
    [1, []]
    # output: [0]
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

