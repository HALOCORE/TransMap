def test():
  "--- test function ---"
  param =[(59,),(7,),(90,),(78,),(49,),(15,),(45,),(56,),(7,),(70,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
