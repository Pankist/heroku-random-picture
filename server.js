var http = require("http");
var randomImageGenerator = require('random-image-generator'),
    fs = require('fs');


http.createServer(function(request, response) {
    randomImageGenerator(800, 600, function(err, image) {
        fs.writeFile('random-image.jpg', image, function(err) {
            // done, hopefully
        });
    });
}).listen(process.env.PORT || 3000);



/**
 * Takes a width and height parameter
 * Returns a Buffer containing a JPEG image
 */
