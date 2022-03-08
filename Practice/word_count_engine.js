function wordCountEngine(document) {
  let splitArray = document.toLowerCase().split(' ');
     let res = [];
     let wordArray = [];
     let newWord = ""
     
     
     for(let i = 0; i < splitArray.length; i++){
       for(let j = 0; j < splitArray[i].length; j++){
         const char = splitArray[i][j];
          if(char >='a' && char <='z'){
            newWord += char;
          }
       }
       wordArray.push(newWord);
       newWord="";
     }
     
     let map = {};
     for(let i = 0; i < wordArray.length; i++){
       if(!map[wordArray[i]]){
         map[wordArray[i]] = 0
       }
       map[wordArray[i]]++;
     }
     wordArray = [...new Set(wordArray)];
     wordArray.sort((a,b) => map[b] - map[a]);
     wordArray.forEach((word) => res.push([word, map[word].toString()]));
     return console.log(res)
 }
wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!   ")