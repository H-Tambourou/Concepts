const countBits = function(n) {
    let res = new Array(n +1);
  
      for(let i = 0; i <= n; i++){
          if(i < 2) res[i] = i; 
          else {
              let a =  res[i >> 1];
              res[i] = a + (i % 2 == 0 ? 0 : 1);
          }
      }
      return res;
  };