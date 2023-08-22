def test():
  "--- test function ---"
  param =[(1,),(92,),(29,),(52,),(55,),(13,),(83,),(83,),(10,),(67,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
