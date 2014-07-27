scratchext
==========

Scratch 2.0 extensions, free for use in any project.

Caveats
-------

These only work in the online Scratch editor, and use the experimental Scratch 2.0 Javascript Extensions draft API. They might break if the API changes.

The API is 'documented' here:

   * http://wiki.scratch.mit.edu/wiki/Scratch_Extension_Protocol_(2.0)#Javascript_Extensions

Importing
---------
This is done via a hidden UI that can be accessed by shift-clicking on the *File* menu within Scratch 2.0.  The *'Import Extension'* item will present a dialog to input a URL for loading a javascript extension.  The javascript file currently must be hosted by a web server for Scratch to load it.  This works in the current online version of Scratch. 

For some reason Scratch doesn't like the importing the raw files hosted via GitHub's HTTPS server, so I've also hosted it on my own. Paths are under each extension below:

Extensions
==========

comment.js
----------
Provides various blocks that allow free text comments to be added, in-line with the existing blocks - anywhere a 'Command' block can be placed.

Location: http://mscott.cx/scratchext/exts/comment.js


weather.js
----------
Provides various blocks to obtain the current weather in a location.

   * **current temperature in ...** - temperature in Celsius. Hint: apply the 'round' operator to the result.
   * **current wind speed in ...** - wind speed.
   * **current wind direction in ...** - wind direction (degrees, meteorological)
   * **current cloud coverage in ...** - cloud coverage as a number 0..100 (percent)
   * **current weather in ...** - primary weather condition, e.g. 'Rain' (do you expect anything else?)

You may experience an issue with the 'current weather in ...' block if the weather is exceptionally nice. I'm not sure what it does when it's sunny with no chance of gales, rain, snow, clouds or tornados.

Data is obtained from http://openweathermap.org/weather-data#current



----

Author: Mark Scott (Twitter: @markscott00)