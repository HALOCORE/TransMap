def test():
  "--- test function ---"
  param =[(56,),(28,),(4,),(24,),(72,),(30,),(48,),(32,),(13,),(19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
