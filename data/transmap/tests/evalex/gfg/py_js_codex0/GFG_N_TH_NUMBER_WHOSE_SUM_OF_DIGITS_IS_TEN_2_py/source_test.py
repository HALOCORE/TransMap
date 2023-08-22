def test():
  "--- test function ---"
  param =[(68,),(70,),(69,),(93,),(99,),(44,),(91,),(8,),(83,),(51,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
