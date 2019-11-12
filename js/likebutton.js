/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var likeButton = document.getElementsByClassName('like');

// De variable wordt gehaald uit de HTML met de classname like.

for (var i = 0; i < likeButton.length; i++){
    likeButton[i].addEventListener('click', function(){ // Als er wordt geklikt op de likeButton gebeurd er wat.
        
        this.classList.toggle('liked'); // De image verandert in het liked icoontje.
    })
}