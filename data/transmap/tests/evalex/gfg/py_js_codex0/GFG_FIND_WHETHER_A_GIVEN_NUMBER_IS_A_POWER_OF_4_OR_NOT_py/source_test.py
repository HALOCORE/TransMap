def test():
  "--- test function ---"
  param =[(45,),(16,),(15,),(91,),(82,),(18,),(31,),(6,),(93,),(35,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
