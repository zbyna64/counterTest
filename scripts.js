// var increaseCounter = 0;
// function increase () {
//     increaseCounter = increaseCounter + 100;
//     document.getElementById('increaseCounter').innerHTML = increaseCounter;
// }


// var clicks = "click";
// if (increaseCounter === 1) {
//     clicks = "click";
// } else {
//     clicks = "clickss";
// }

//inner.html meni stary obsah na novy, tady prictu +1 k promenne a tu promenou nactu
var increaseCounter = 0;
function increase () {
    increaseCounter = increaseCounter + 1;
    var clicks = "click";
if (increaseCounter === 1) {           //change "s" at the end og click word
    clicks = "click";
} else {
    clicks = "clicks";
}
   document.getElementById('increaseCounter').innerHTML = increaseCounter + " " + clicks;
}



var decreaseCounter = 0;
function decrease () {
    decreaseCounter = decreaseCounter - 1;
    document.getElementById('decreaseCounter').innerHTML = decreaseCounter;
}