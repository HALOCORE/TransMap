def test():
  "--- test function ---"
  param =[(1, 1, 1, 3,),(3, 2, 5, 38,),(0, 0, 0, 0,),(- 1, - 1, - 1, 1,),(82, 79, 6, 59,),(14, 57, 35, 29,),(6, 96, 45, 75,),(13, 7, 3, 63,),(96, 65, 72, 93,),(70, 33, 6, 2,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
