def test():
  "--- test function ---"
  param =[(51,),(40,),(68,),(7,),(8,),(32,),(93,),(75,),(71,),(15,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
