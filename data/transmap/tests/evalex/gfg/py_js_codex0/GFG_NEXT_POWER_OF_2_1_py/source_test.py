def test():
  "--- test function ---"
  param =[(8,),(79,),(31,),(63,),(18,),(2,),(6,),(85,),(29,),(8,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
