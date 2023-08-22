def test():
  "--- test function ---"
  param =[(10, 4,),(5, 2,),(2, 8,),(83, 7,),(91, 0,),(18, 53,),(83, 41,),(98, 53,),(43, 37,),(31, 20,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
