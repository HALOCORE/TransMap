def test():
  "--- test function ---"
  param =[(8,),(39,),(25,),(44,),(72,),(6,),(72,),(62,),(48,),(39,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
