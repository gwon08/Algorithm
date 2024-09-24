function solution(n, control) {
  for(i=0; i<control.length; i++) {
      let a = control[i]
      if(a == "w") {
          n += 1;
      }
      if(a == "s") {
          n -= 1;
      }
      if(a == "d") {
          n += 10;
      }
      if(a == "a") {
          n -= 10;
      }
  }
    return n
}