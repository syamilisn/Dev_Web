/*var notes = document.getElementById("notes");
document.write("<br>NOTES: ",notes);

var element = document.createElement('div');
element.id = 'notes';
var el = document.getElementById('notes');

let newNode = document.createElement("span");
let parentDiv = document.getElementById("childElement").parentNode
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)*/
let sp1 = document.createElement("pre")
let sp2 = document.getElementById("childElement")
let parentDiv = sp2.parentNode
parentDiv.insertBefore(sp1, sp2)