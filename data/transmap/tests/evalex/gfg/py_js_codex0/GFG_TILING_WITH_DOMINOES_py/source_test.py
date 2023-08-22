def test():
  "--- test function ---"
  param =[(29,),(13,),(25,),(65,),(27,),(42,),(19,),(50,),(59,),(13,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
