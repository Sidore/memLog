
(function(globals) {
    'use strict';
    var memlog = function(url){

        if (window.console && window.console.log) {

            var pathToImg = window.location.origin + url;

            var imageStyle = 'font-size: 1px;' +
              'padding: 0px 240px;' +
              'line-height: 300px;' +
              'background: url(' + pathToImg + ') 0 0;' +
              'background-size: 500px;' +
              'margin-bottom: -20px;' + 
              'background-position: center bottom;' + 
              'background-repeat: no-repeat;' + 
              'color: transparent;';
            var textStyle = 'font: 40px Helvetica; color : white; padding: 170px 0; line-height: 5px; margin: -300px 0; ';
            console.log('%c.\n%c\t\tАстанавитесь!\n\n\n', imageStyle, textStyle);
          }  
    }
  
    if (typeof define !== 'undefined' && define.amd) {
      define([], function() {
        return memlog;
      }); // RequireJS
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = memlog; // CommonJS
    } else {
      globals.memlog = memlog; // <script>
    }
  })(this);