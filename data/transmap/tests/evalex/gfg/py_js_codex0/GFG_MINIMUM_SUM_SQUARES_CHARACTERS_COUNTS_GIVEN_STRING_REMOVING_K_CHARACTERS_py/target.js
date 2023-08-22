function f_gold(str, k) {
  let l = str.length;
  if(k >= l) return 0;
  let frequency = Array(MAX_CHAR).fill(0);
  for(let i = 0;i < l;i++) frequency[str.charCodeAt(i) - 97] += 1;
  let q = new PriorityQueue();
  for(let i = 0;i < MAX_CHAR;i++) q.put(- frequency[i]);
  while(k > 0) {
    let temp = q.get();
    temp = temp + 1;
    q.put(temp, temp);
    k = k - 1;
  }
  let result = 0 ;
  while(!q.empty()) {
    let temp = q.get();
    temp = temp *(- 1);
    result += temp * temp;
  }
  return result;
}

