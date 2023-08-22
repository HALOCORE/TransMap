def test():
  "--- test function ---"
  param =[(71, 78,),(85, 75,),(4, 35,),(20, 99,),(71, 29,),(72, 88,),(36, 54,),(95, 52,),(83, 33,),(72, 13,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
