var FileReader = function (path) {
  var self = this;
  var fs = require('fs');
  var read = fs.createReadStream(path);

  self.read = function(func) {
    read.on('data', function(data) {
      func(data.toString());
    });
  }

  self.makeMatrix = function () {
    self.read(function(dataStr) {
      var arr = new Array();

      for ( var i = 0; i < dataStr.length; i++ ) {
        if (dataStr.charAt(i).match(/\w/)) {
          console.log(dataStr.charAt(i));
        } else {
          console.log("new line");
        }
      }
    });
  };
};
module.exports = FileReader;
