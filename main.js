var pdiv = [];
var h2div = [];
var wordArr = [];
var counter;
var countArr;
var min;
var head;
var newElem;
window.onload = function(){
  pdiv = document.querySelectorAll("p");
  h2div = document.querySelectorAll("h2");
  for(var i = 0; i < pdiv.length; i++){
    wordArr[i] = pdiv[i].textContent;
  }
  for(var j = 0; j < h2div.length; j++){
    wordArr[wordArr.length + j] = h2div[j].textContent;
  }
  for(var k = 0; k < wordArr.length; k++){
    counter += wordArr[k].split(" ");
  }
  countArr = counter.split(",");
  min = countArr.length/230;
  head = document.getElementById("header");
  newElem = '<h3>time to read: ' + Math.round(min) + ' minutes.';
  head.insertAdjacentHTML('afterend', newElem);
}
