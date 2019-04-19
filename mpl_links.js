"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Gabriel Hernandez
   Date: 4/18/19  
   
   Filename: mpl_links.js

*/

//loads the fucntion when the window loads
window.addEventListener("load", function(e) {
    var allSelect = document.forms.govLinks;

    //loops throuh the select elemetns in the for and targets them for the event listenter.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function(e) {
            window.location.href = e.target.value;
        }
    }
});

