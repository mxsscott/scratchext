// weather.js
// Mark Scott (@markscott00), July 2014
// Obtain current weather data.
// Extended from weather extension example here: http://llk.github.io/scratch-extensions/
//
(function(ext) {
    var api="http://api.openweathermap.org/data/2.5/weather?q=";

    // Commands
    ext.getTemp = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the temperature
                  temperature = weather_data['main']['temp'];
                  callback(temperature);
              }
        });
    };

    ext.getWindSpeed = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the speed
                  speed = weather_data['wind']['speed'];
                  callback(speed);
              }
        });
    };

    ext.getWindDirection = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the direction
                  degrees = weather_data['wind']['deg'];
                  callback(degrees);
              }
        });
    };

    ext.getCloudCover = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the coverage
                  coverage = weather_data['clouds']['all'];
                  callback(coverage);
              }
        });
    };

    ext.getWeather = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the weather
                  weather = weather_data['weather'][0]['main'];
                  callback(weather);
              }
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
            ['R', 'current temperature in %s', 'getTemp', 'Carlisle,UK'],
            ['R', 'current wind speed in %s', 'getWindSpeed', 'Carlisle,UK'],
            ['R', 'current wind direction in %s', 'getWindDirection', 'Carlisle,UK'],
            ['R', 'current cloud coverage in %s', 'getCloudCover', 'Carlisle,UK'],
            ['R', 'current weather in %s', 'getWeather', 'Carlisle,UK']
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
    ScratchExtensions.register('@markscott00 - Weather', descriptor, ext);
})({});
