def test():
  "--- test function ---"
  param =[(73, 75,),(70, 5,),(53, 62,),(80, 70,),(9, 59,),(38, 48,),(41, 49,),(80, 72,),(42, 52,),(54, 1,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
