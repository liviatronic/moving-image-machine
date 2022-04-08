$(document).ready(function ($) {

    var start = 1;
    var rowcut1 = 30;
    var columncut1 = 30;
    var img2Limit = 40;
    //var img3Limit = 2;

    // load image 1
    for (var i = start; i <= rowcut1; i++) {    ///rows 
        for (var m = start; m <= columncut1; m++) { // columns
            $('.img1-container').append('<img class="bit1" src="images/img1/image_' + i + '_' + m + '.jpeg">');
        }
    }

    // load image 2
    for (var i = start; i <= img2Limit; i++) {
        for (var m = start; m <= img2Limit; m++) {
            $('.img2-container').append('<img class="bit2" src="images/img2/image_' + i + '_' + m + '.jpeg">');
        }
    }

    // // load image 3
    // for (var i = start; i <= img3Limit; i++) {
    //     for (var m = start; m <= img3Limit; m++) {
    //         $('.img3-container').append('<img class="bit3" src="images/img3/image_' + i + '_' + m + '.jpeg">');
    //     }
    // }

});