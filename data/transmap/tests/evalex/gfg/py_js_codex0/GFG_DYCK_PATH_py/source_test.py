def test():
  "--- test function ---"
  param =[(72,),(90,),(61,),(28,),(70,),(13,),(7,),(98,),(99,),(67,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
