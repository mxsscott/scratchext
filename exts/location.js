// weather.js
// Mark Scott (@markscott00), July 2014
// Obtain current location from browser.
//
// Geolocation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
//
(function(ext) {
    // Commands
    ext.getLat = function(callback) {
        // Get Latitude from the web browser's location service.
        navigator.geolocation.getCurrentPosition(function(position) {
          callback(position.coords.latitude);
        });
    };

    ext.getLong = function(callback) {
      // Get Longitude from the web browser's location service.
      navigator.geolocation.getCurrentPosition(function(position) {
          callback(position.coords.longitude);
        });
    };

    // Required method called when the Scratch project removes the extension
    // or the user leaves the project.
    ext._shutdown = function() {
        // Comments have nothing to shut down.
    };

    // Required method called by the Scratch UI.
    // Must return an object with 2 properties.
    //   status : 0 for error, 1 for warning, 2 for all okay.
    //   msg : additional message displayed by UI.
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready for use.'};
    }

    // Required description of the extension. Passed as an argument to 'register' below.
    var descriptor = {
        // Array of block definitions.
        // op code, formatted label, method (in this script), defaults.
        // Opcodes are:
        //    ' ' : synchronous command
        //    'w' : asynchronous command
        //    'h' : hat block
        //    'r' : reporter block
        //    'R' : asynchronous reporter block
        // 
        blocks: [
            ['R', 'current latitude', 'getLat'],
            ['R', 'current longitude', 'getLong']
        ],
        menus: {
        },
	    url: 'https://github.com/mxsscott/scratchext'
    };

    // Required - register the extension with the Scratch UI.
    // Arguments:
    //   1. The extension name. This MUST be unique.
    //   2. A descriptor object.
    //   3. An extensions instance.
    ScratchExtensions.register('@markscott00 - Location', descriptor, ext);
})({});
