def test():
  "--- test function ---"
  param =[([' ', 'B', 'C', 'D', 'F', 'G', 'G', 'I', 'K', 'O', 'T', 'T', 'X', 'X', 'Z', 'Z', 'Z', 'c', 'g', 'i', 'i', 'm', 'q', 'q', 's', 't', 'v'],),(['1', '4', '0', '2', '9', '1', '8', '8', '2', '9', '3', '9', '5', '1', '3', '4', '7', '4', '5', '8', '0', '6', '4', '7', '2', '5', '0', '0', '2', '7', '7', '3', '3'],),(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],),(['F', 'i', 'a', 'E', 'Q', 's', 's', 'a', 'K', 'j', 'N', 'U', 'U', 'p', 'R', 'u', 'Q', 's', 'i', 'c', 'Y', 'M', 'w', 'J', 's', 'M', 'L', 'z', 'c'],),(['0', '0', '0', '1', '1', '1', '1', '2', '2', '2', '3', '3', '3', '3', '4', '4', '5', '6', '6', '6', '7', '7', '8', '8', '8', '8', '9', '9'],),(['1', '0', '1', '0', '1', '0', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '1', '1', '1', '0', '0', '0', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1'],),([' ', 'C', 'S', 'v'],),(['2', '4', '1', '3', '3', '3', '0', '4', '0', '2', '2', '4', '1', '8', '4', '6', '4', '2', '9', '3', '5', '2', '8', '0', '1', '0', '7', '6', '8', '8', '7', '6', '6', '3', '1', '2', '2', '9', '5', '7', '2', '6', '5', '7', '1', '5'],),(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1'],),(['l', 'X', 'i', 'J', 'e', 'm', 'L', 'g', 'L', 'p', 'b', 'y', 'E', 'g'],)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()