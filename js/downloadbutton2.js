/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var downloadButtonVerhaal = document.getElementsByClassName('download');

// De variable wordt gehaald uit de HTML met de classname download.

for (var i = 0; i < downloadButtonVerhaal.length; i++){
    downloadButtonVerhaal[i].addEventListener('click', function(){
        this.classList.toggle('gedown');
        // Als er wordt geklikt op de downloadButton dan verandert het icoontje in de gedownload img.
    })
}