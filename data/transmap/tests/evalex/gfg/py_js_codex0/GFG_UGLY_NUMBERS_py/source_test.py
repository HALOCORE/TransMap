def test():
  "--- test function ---"
  param =[(27,),(64,),(93,),(90,),(85,),(86,),(72,),(86,),(32,),(1,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
