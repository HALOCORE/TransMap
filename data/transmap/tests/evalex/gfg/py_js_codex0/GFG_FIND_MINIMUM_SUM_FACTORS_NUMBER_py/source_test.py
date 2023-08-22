def test():
  "--- test function ---"
  param =[(83,),(88,),(60,),(6,),(26,),(98,),(38,),(90,),(76,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
