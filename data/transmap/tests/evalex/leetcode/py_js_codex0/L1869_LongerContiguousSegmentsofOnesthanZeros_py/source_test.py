
# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"

def test():
  "--- test function ---"
  param = [
    # example 1
    ["1101"]
    # output: true
    # EXPLANATION:  The longest contiguous segment of 1s has length 2: "<u>11</u>01" The longest contiguous segment of 0s has length 1: "11<u>0</u>1" The segment of 1s is longer, so return true.
    ,
    # example 2
    ["111000"]
    # output: false
    # EXPLANATION:  The longest contiguous segment of 1s has length 3: "<u>111</u>000" The longest contiguous segment of 0s has length 3: "111<u>000</u>" The segment of 1s is not longer, so return false.
    ,
    # example 3
    ["110100010"]
    # output: false
    # EXPLANATION:  The longest contiguous segment of 1s has length 2: "<u>11</u>0100010" The longest contiguous segment of 0s has length 3: "1101<u>000</u>10" The segment of 1s is not longer, so return false.
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

