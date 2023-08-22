def test():
  "--- test function ---"
  param =[(91,),(52,),(78,),(51,),(65,),(39,),(42,),(12,),(56,),(98,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
