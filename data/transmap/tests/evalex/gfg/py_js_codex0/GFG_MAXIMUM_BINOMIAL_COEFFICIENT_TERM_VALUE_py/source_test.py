def test():
  "--- test function ---"
  param =[(23,),(41,),(69,),(56,),(71,),(38,),(26,),(52,),(93,),(44,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
