

function nFunction() {
   document.getElementById("certificate-container").style.backgroundImage = "url('pics/basic2.png')";

}
function sFunction() {
   document.getElementById("certificate-container").style.backgroundImage = "url('pics/school2.png')";
}

function mFunction() {
   document.getElementById("certificate-container").style.backgroundImage = "url('pics/ribbon2.png')";
}

function lFunction() {
   document.getElementById("pick-l").style.backgroundImage = "url('pics/spy2.png')";
}


function gFunction() {
   document.getElementById("pick-l").style.backgroundImage = "url('pics/gulpin2.png')";

}
function cwFunction() {
   document.getElementById("pick-l").style.backgroundImage = "url('pics/cw2.png')";
}
function wFunction() {
   document.getElementById("pick-l").style.backgroundImage = "url('pics/walt2.png')";

}
function bFunction() {
   document.getElementById("pick-medel").style.backgroundImage = "url('pics/blue2.png')";

}
function rFunction() {
   document.getElementById("pick-medel").style.backgroundImage = "url('pics/red2.png')";
}

function goFunction() {
   document.getElementById("pick-medel").style.backgroundImage = "url('pics/gold2.png')";
}

function textFunction() {
   var x = document.getElementById("text").value;
   document.getElementById("put-text").innerHTML = x;
}

function forFunction() {
   var x = document.getElementById("for-value").value;
   document.getElementById("why").innerHTML = x;


}
function dateFunction() {
   const d = new Date();
   document.getElementById("thedate").innerHTML = d.toDateString();
}