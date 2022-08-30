//Business Logic
function wordCounter(text){
  if (text.trim().length === 0) {
    return 0;
  }
  let wordcount = 0;
  const textArr = text.split(" ");
textArr.forEach(function(word){
  wordcount++;
});
  return wordcount;
} 