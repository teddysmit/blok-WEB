/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var uno = document.querySelector('button.terug');

var popup = document.querySelector('img.popup');

uno.addEventListener ('click', function(){
        popup.classList.toggle('popup');
});


