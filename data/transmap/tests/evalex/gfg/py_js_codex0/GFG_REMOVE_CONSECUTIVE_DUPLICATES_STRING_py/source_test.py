def test():
  "--- test function ---"
  param =[([' ', ' ', ' ', 'A', 'B', 'C', 'E', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'R', 'R', 'S', 'T', 'U', 'W', 'W', 'W', 'a', 'b', 'd', 'd', 'e', 'e', 'e', 'g', 'h', 'l', 'm', 'm', 'n', 'o', 'p', 'p', 'q', 't', 'u', 'u', 'u', 'w', 'w', 'x', 'y', 'z', 'z'],),(['6', '9', '6', '7', '3', '3', '3', '1', '3', '1', '6', '0', '2', '5', '6', '6', '5', '1', '5', '5', '7', '7', '2', '8', '4', '2', '8', '0', '1', '1', '5', '4', '4', '3', '6', '0', '7', '7', '6', '1', '9', '6', '0', '8', '9', '1', '3', '8'],),(['0', '0', '0'],),(['f', 'V', 'u', 'B', 'i', 'f', 'j', 'Z', 'Q', 'r', ' ', 'H', 't', 'g', 'K', 'Y', 'O', 'r', 'c', 'm', 'D', 'c', 'g', 'W', 'm', 'F'],),(['0', '0', '0', '1', '2', '2', '4', '5', '5', '5', '6', '6', '7', '7', '8', '8', '8'],),(['1', '0', '1', '0', '1', '1', '0', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1', '0', '1', '0', '1'],),([' ', ' ', 'B', 'E', 'E', 'G', 'H', 'J', 'M', 'N', 'O', 'O', 'P', 'P', 'Q', 'S', 'U', 'W', 'Y', 'a', 'c', 'd', 'f', 'h', 'i', 'k', 'k', 'l', 'l', 'm', 'p', 'p', 'p', 's', 't', 'v', 'y', 'z', 'z'],),(['8', '8', '6', '9', '8', '0', '6', '8', '0', '5', '4', '1', '2', '8', '7', '9', '2', '4', '8', '0', '6', '1', '9', '6', '4', '6', '7', '4', '4', '2', '6', '8', '1', '5', '8', '6', '6'],),(['0', '0', '0', '0', '1'],),([' ', 'z', 'f', 'F', 'V', ' ', 'C', 'S', 'L', 'f', 'n', 'S', 's', 'd', 'N', 'A', 'r', 's', ' ', 'u', 'k', 'l', 'b', 'f', 'p', 'O', 't'],)]
  for i, parameters_set in enumerate(param):
    idx = i
    f_gold(* parameters_set)
    result = parameters_set
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
