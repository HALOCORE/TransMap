def test():
  "--- test function ---"
  param =[(37, 17,),(70, 52,),(26, 23,),(9, 96,),(82, 71,),(95, 36,),(43, 40,),(7, 27,),(19, 56,),(49, 28,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
