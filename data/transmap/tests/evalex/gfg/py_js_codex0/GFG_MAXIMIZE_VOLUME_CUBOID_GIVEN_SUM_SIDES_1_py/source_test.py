def test():
  "--- test function ---"
  param =[(8,),(96,),(96,),(96,),(12,),(95,),(72,),(81,),(42,),(13,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
