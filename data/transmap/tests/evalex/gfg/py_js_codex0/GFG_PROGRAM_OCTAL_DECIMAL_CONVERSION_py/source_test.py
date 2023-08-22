def test():
  "--- test function ---"
  param =[(37,),(25,),(63,),(66,),(32,),(5,),(41,),(82,),(54,),(5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
