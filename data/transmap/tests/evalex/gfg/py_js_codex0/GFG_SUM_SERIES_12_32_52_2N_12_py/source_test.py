def test():
  "--- test function ---"
  param =[(14,),(61,),(37,),(86,),(47,),(98,),(70,),(24,),(76,),(24,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
