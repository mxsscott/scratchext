// comment.js
// Mark Scott (@markscott00), July 2014
// Allows Scratchers to comment their code as inline 'command' blocks.
//
(function(ext) {
    // Commands
    ext.doComment = function(comment) {
        // It's a comment! We do nothing.
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
            [' ', 'make a note that %s', 'doComment', 'this makes the cat dance'],
            [' ', 'I\'m going to %s by:', 'doComment', 'do a dance'],
            [' ', 'summarise the following as %s', 'doComment', 'magic'],
            [' ', '// %s', 'doComment', '']
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
    ScratchExtensions.register('@markscott00 - Comment', descriptor, ext);
})({});
