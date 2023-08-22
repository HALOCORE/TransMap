def test():
  "--- test function ---"
  param =[(72,),(75,),(92,),(30,),(45,),(40,),(81,),(17,),(81,),(99,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
