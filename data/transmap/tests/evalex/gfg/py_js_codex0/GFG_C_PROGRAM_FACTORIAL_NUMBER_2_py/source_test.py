def test():
  "--- test function ---"
  param =[(66,),(93,),(39,),(93,),(68,),(20,),(37,),(52,),(52,),(19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
