/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var downloadButton = document.querySelectorAll('body section article button');

for (var i = 0; i < downloadButton.length; i++){
    downloadButton[i].addEventListener('click', function(){
        this.classList.toggle('gedownload');
    })
}


