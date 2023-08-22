#TESTED_PROGRAM

if sorted_list_sum(["aa", "a", "aaa"]) != ["aa"]:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(["school", "AI", "asdf", "b"]) != ["AI", "asdf", "school"]:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(["d", "b", "c", "a"]) != []:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(["d", "dcba", "abcd", "a"]) != ["abcd", "dcba"]:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(["AI", "ai", "au"]) != ["AI", "ai", "au"]:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(["a", "b", "b", "c", "c", "a"]) != []:
  raise Exception("MyLogError MISMATCH")
if sorted_list_sum(['aaaa', 'bbbb', 'dd', 'cc']) != ["cc", "dd", "aaaa", "bbbb"]:
  raise Exception("MyLogError MISMATCH")