var randomImageGenerator = require('random-image-generator'),
    fs = require('fs');

/**
 * Takes a width and height parameter
 * Returns a Buffer containing a JPEG image
 */
randomImageGenerator(800, 600, function(err, image) {
    fs.writeFile('random-image.jpg', image, function(err) {
        // done, hopefully
    });
});