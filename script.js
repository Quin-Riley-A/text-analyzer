

function passage(word, text) {
  if ((isEmpty(word)) || (isEmpty(text))) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.includes(word)) {
      let targetIndex = element.indexOf(word);
      p.append(element)
    if (index !== (textArray.length - 1)) {
      p.append(" ");}
    }
  });
  return p;
}

if (element.includes(word)) {
  let targetIndex = element.indexOf(word);
  p.append(element.slice(0,targetIndex))
  const bold = document.createElement("strong");
  bold.append(element.slice(targetIndex, targetIndex+word.length));
  p.append(bold);
  p.append(element.slice(targetIndex+word.length));
} else {
  p.append(element);
}


  


