def test():
  "--- test function ---"
  param =[([' ', 'A', 'A', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'H', 'L', 'L', 'O', 'P', 'T', 'U', 'V', 'W', 'Z', 'a', 'b', 'f', 'f', 'h', 'h', 'i', 'j', 'q', 'y', 'y', 'z'],[' ', ' ', 'B', 'D', 'F', 'G', 'H', 'I', 'K', 'K', 'L', 'P', 'P', 'R', 'R', 'U', 'V', 'Y', 'Z', 'Z', 'e', 'g', 'h', 'j', 'l', 'o', 'p', 'q', 'r', 't', 'v', 'y', 'z'], 25, 21,),(['8', '7', '8', '1', '3', '8', '8', '1', '7', '0', '6', '8', '8', '7', '3', '1', '0', '9', '6', '1', '9', '2', '6', '6', '3', '1', '9', '7', '5', '5', '0', '0', '0', '7', '6', '4', '9', '7', '3', '0', '7', '0', '8'],['0', '2', '1', '1', '8', '9', '6', '0', '1', '7', '0', '2', '1', '8', '7', '9', '9', '8', '0', '2', '7', '9', '1', '6', '8', '1', '3', '4', '7', '8', '0', '2', '4', '2', '6', '9', '1', '1', '4', '2', '4', '7', '4'], 22, 22,),(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], 30, 34,),(['x', 'H', 'h', 'z', 'X', 'S', 'f', 'h'],['H', 'f', 'Q', 'b', 'H', 'X', 'l', 'u'], 4, 7,),(['0', '1', '1', '2', '3', '3', '4', '4', '4', '5', '5', '6', '7', '7', '8', '8', '8', '8', '8', '8', '9', '9', '9', '9', '9'],['0', '0', '0', '1', '2', '2', '2', '2', '3', '3', '4', '6', '6', '6', '6', '7', '7', '8', '8', '8', '9', '9', '9', '9', '9'], 20, 13,),(['1', '1', '0', '0', '0', '1', '0', '0', '0', '1', '1', '0', '1'],['0', '1', '0', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1'], 10, 12,),(['A', 'B', 'B', 'C', 'E', 'E', 'E', 'F', 'L', 'M', 'M', 'M', 'M', 'O', 'O', 'P', 'P', 'Q', 'S', 'T', 'W', 'Y', 'Z', 'a', 'a', 'b', 'd', 'e', 'f', 'i', 'k', 'l', 'l', 'n', 'n', 'n', 'p', 'p', 'q', 'r', 'r', 't', 'u', 'u', 'u', 'u', 'u', 'x', 'x'],[' ', 'B', 'B', 'C', 'C', 'D', 'E', 'I', 'K', 'K', 'O', 'Q', 'Q', 'T', 'T', 'X', 'X', 'X', 'a', 'b', 'c', 'd', 'h', 'h', 'i', 'k', 'k', 'l', 'n', 'o', 'o', 'p', 'p', 'q', 'q', 'r', 'r', 's', 'u', 'u', 'u', 'v', 'w', 'x', 'x', 'x', 'x', 'y', 'z'], 39, 46,),(['7', '2', '9', '3', '7', '3', '4', '5', '7', '6', '6', '3', '3', '7', '1', '3', '2', '1', '9', '5', '9', '9', '3', '8', '8', '6', '6', '2', '7', '1', '9', '9', '4', '1', '4', '1', '3', '5'],['6', '3', '7', '2', '9', '2', '6', '4', '4', '7', '6', '4', '5', '5', '9', '0', '0', '4', '2', '3', '6', '7', '6', '2', '6', '7', '8', '6', '6', '5', '2', '6', '4', '4', '1', '8', '3', '0'], 26, 27,),(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], 16, 19,),(['n', 'T', 't', 'o', 'i', 'p', 'f', 'R', 'x', 'I', 'p', 'E', 'C', 'm', 'r', 'c', 'U', 'e', ' ', 'o', 'e', 'J', 'C', 'd', 'G', 'l'],['b', 'u', 'F', 'm', 's', 'x', 'T', 'm', 'x', 'o', 'i', 'U', 'd', 'N', 'h', 'z', 'I', 'u', 'g', 'J', 'u', 'f', 'e', 'Q', 'H', 'y'], 16, 21,)]
  for i, parameters_set in enumerate(param):
    idx = i
    f_gold(* parameters_set)
    result = parameters_set
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
