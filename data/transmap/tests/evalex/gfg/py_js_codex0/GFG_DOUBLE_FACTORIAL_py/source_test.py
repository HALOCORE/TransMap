def test():
  "--- test function ---"
  param =[(52,),(93,),(15,),(72,),(61,),(21,),(83,),(87,),(75,),(75,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
