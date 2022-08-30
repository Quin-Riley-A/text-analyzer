//Business Logic
function wordCounter(word){
  let wordcount = 0;
  const textArr = word.split(" ");
textArr.forEach(function(){
  wordcount++;
});
  return wordcount;
} 