/**
* Loader async files JS and CSS
* Create in 2014-17-01 by Leandro Dias @le17i
* GitHub: le17i
* URL: 
**/

(function (window, document) {
      "use strict";

      /**
      * Loader function
      * @params: url's to load
      * callback function on end loader
      **/
      var loader = function (params, callback) {
            if (typeof params !== "function") {
                  for (var i in params) {
                        LoadFile(params[i], GetExtension(params[i]));
                  }
            }

            if (typeof callback === "function") { callback(); }
      };

      var 
            /**
            * Return a script element tag
            * @file: url file
            **/
            CreateElementJS = function (file) {
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = file;
                  return s;
            }

            /**
            * Create Element CSS function
            * Return a link element tag
            * @file: url file
            **/
            , CreateElementCSS = function (file) {
                  var l = document.createElement('link');
                  l.type = 'text/css';
                  l.rel = 'stylesheet';
                  l.href = file;
                  return l;
            }

            /**
            * Get Extension function
            * Returns a file's extension
            * @file: file's url
            **/
            , GetExtension = function (file) {
                  return file.substring(file.lastIndexOf('.') + 1);
            }

            /**
            * Load File function
            * Load file on document
            * @file: file's url
            * @type: file's extension. Must be .js or .css files. Use the Get Extension function to get a file's type.
            **/
            , LoadFile = function (file, type) {
                  var f = (type == "js") ?
                        CreateElementJS(file) :
                        CreateElementCSS(file);

                  (document.getElementsByTagName('head')[0] || document.getElementsbyTagName('body')[0]).appendChild(f);
            };

      // Create a loader variable on window
      window.loader = loader;

})(this, document);
