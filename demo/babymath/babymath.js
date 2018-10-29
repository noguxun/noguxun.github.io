var drawingApp = (function(){
  "use strict";

  var textDiv, 
      maxTotal = 20,
      maxWidth = 2,
  

  updateClick = function(){
    textDiv.innerHTML = mathText();
  },
  
  randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  formatNumLen = function(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = " " + r;
    }
    return r;
  },
  
  mathText = function() {
    var i;
    var body = "";
    for (i = 0; i < 1000; i++) {
      var num1 = formatNumLen(randInt(0, maxTotal - 1), maxWidth);
      var num2 = formatNumLen(randInt(1, maxTotal - num1), maxWidth);
      body += num1 + " + " + num2 + " =        ";
      if (i % 2 == 1) {
        body += "\n";
      }
    }
    
    return body;
  },

  mainExec = function() {
  
    textDiv = document.getElementById('abc');    
    textDiv.innerHTML = mathText();
    
    document.getElementById('btn0').onclick = updateClick;
  };

  return {
    main: mainExec
  };

}());
