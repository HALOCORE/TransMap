def test():
  "--- test function ---"
  param =[(35,),(93,),(7,),(81,),(80,),(47,),(7,),(41,),(59,),(34,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
