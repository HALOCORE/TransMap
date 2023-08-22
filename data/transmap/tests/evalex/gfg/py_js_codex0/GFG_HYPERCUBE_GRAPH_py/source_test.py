def test():
  "--- test function ---"
  param =[(72,),(28,),(45,),(41,),(94,),(97,),(97,),(36,),(91,),(84,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
