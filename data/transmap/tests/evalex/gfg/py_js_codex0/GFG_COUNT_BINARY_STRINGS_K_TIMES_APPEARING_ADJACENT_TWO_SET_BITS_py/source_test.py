def test():
  "--- test function ---"
  param =[(29, 85,),(47, 29,),(77, 96,),(9, 91,),(29, 80,),(94, 85,),(51, 87,),(46, 62,),(18, 96,),(86, 86,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
