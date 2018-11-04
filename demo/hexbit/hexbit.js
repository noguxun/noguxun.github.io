var drawingApp = (function() {
  "use strict";

  var textDiv,   

  showBitsClicked = function() {
    var textBox = document.getElementById('txt0');
    var intStrs = textBox.value.split(' ');

    for (var i = 0; i < intStrs.length; i++)
    {
      var intStr = intStrs[i];
      if (intStr == "")
      {
        continue;
      }
      textDiv.innerHTML = makeBinaryText(intStr) + textDiv.innerHTML;
    }
  },

  clearClicked = function () {
    textDiv.innerHTML = "";
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
  
  
  makeBinaryText = function(value) {
    var body = "";

    if (isNaN(value))
    {
      alert(textBox.value + " is not a valid input.");
      return "";
    }

    var body = "\n" + value + "\n";

    var shift = 31;
    while(shift >= 0) 
    {
      body += " " + formatNumLen(shift, 2);
      if ((shift % 4) == 0)
      {
        body += " |";
      }
          
      shift -= 1;
    }

    body += "\n";

    shift = 31
    while(shift >= 0)
    {
      var tmp = (value >> shift) & 0x1;
      body += "  " + tmp
      if (shift % 4 == 0)
      {
        body += " |";
      }

      shift -= 1;
    }

    body += "\n";
    console.log(body);
    return body;
  },

  mainExec = function() {
    textDiv = document.getElementById('maintxt0');    
    var textBox = document.getElementById('txt0');
    textBox.value = "0xabcd";
    
    document.getElementById('btn0').onclick = showBitsClicked;
    document.getElementById('btn1').onclick = clearClicked;
  };

  return {
    main: mainExec
  };

}());
