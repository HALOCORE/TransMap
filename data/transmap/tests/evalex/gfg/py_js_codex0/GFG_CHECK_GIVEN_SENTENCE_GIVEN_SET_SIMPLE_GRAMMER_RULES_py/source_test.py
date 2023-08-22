def test():
  "--- test function ---"
  param =["I love cinema.", "The vertex is S.", "I am single.", "My name is KG.", "I lovE cinema.", "GeeksQuiz. is a quiz site.", "I love Geeksquiz and Geeksforgeeks.", "  You are my friend.", "I love cinema", "Hello world !"]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
