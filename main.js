// GENERATE A RANDOM INTEGER BETWEEN MIN AND MAX (BORDERS INCLUDED)
// Input 1: Two integers
// Output: Generated Integer
function randomIntBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let i = 0;
let arr = [];

createBars();

function createBars(){
    let bar = document.createElement('div');
    document.querySelector(".bars").appendChild(bar);
    bar.style.height = randomIntBetween(0,35) + "px";
    i++;
        if(i > 40){
        //  find the firstbar
            const firstbar = document.querySelector(".bars").firstChild;
        firstbar.remove();
        }
    setTimeout(createBars, 600);
}