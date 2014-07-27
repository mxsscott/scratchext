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

You can use the 'raw' view of the file on GitHub to get a URL that is importable, without downloading and hosting it on your own server.

Extensions
==========

comment.js
----------
Provides various blocks that allow free text comments to be added, in-line with the existing blocks - anywhere a 'Command' block can be placed.

Location: https://raw.githubusercontent.com/mxsscott/scratchext/master/exts/comment.js

