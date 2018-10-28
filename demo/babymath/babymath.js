var drawingApp = (function(){
  "use strict";

  var textDiv,
  

  updateClick = function(){
    cirNum = textbox.value;
    if(cirNum > 5) {
      cirNum = 5;
    }
    if(cirNum < 1) {
      cirNum = 1;
    }
    textBox.value = cirNum;
  },
  
  randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  formatNumLen = function(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = " " + r;
    }
    console.log(r);
    return r;
  },
  
  mathText = function() {
    var num1 = formatNumLen(randInt(0, 20), 2);
    var num2 = formatNumLen(randInt(0, 20 - num1), 2);
    var body = num1 + " + " + num2;
    console.log(body);
    return body;
  },

  mainExec = function() {
    textDiv = document.getElementById('abc');
    //var content = document.createTextNode(mathText());
    //textDiv.appendChild(content);
    textDiv.innerHTML = mathText();
    
    document.getElementById('btn0').onclick = updateClick;
  };

  return {
    main: mainExec
  };

}());
