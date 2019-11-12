/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var een =
document.getElementsByClassName('download');

var popup =
document.querySelector('img.toevoegen');

een.addEventListener ('click', function (){
        popup.classList.toggle('toevoegen');
});