
let toggleNavStatus = false;
let getMenu = document.querySelector('.menu');
let toggleMenu = document.querySelector('.menu-toggle');
let body = document.querySelector('.change-color'); 
let changeBgRed = document.querySelector('#color-red'); 
let changeBgYellow = document.querySelector('#color-yellow'); 
let changeBgPink = document.querySelector('#color-pink'); 
let changeBgBlue = document.querySelector('#color-blue'); 
let changeBgGreen = document.querySelector('#color-green'); 
let colorBox = document.querySelector('.what-color');


let toggleNav = function(){
    if (toggleNavStatus === false) {
    getMenu.style.visibility = 'visible';
    toggleNavStatus = true;

    }
    else if (toggleNavStatus === true) {
    getMenu.style.visibility = 'hidden';
    toggleNavStatus = false;
    }
}

changeBgRed.addEventListener("click", function() {
     document.body.style.background = "#F48070";
    colorBox.style.visibility = "visible"
    colorBox.innerHTML = "Pastel red"
    getMenu.style.visibility = "hidden";
})

changeBgYellow.addEventListener("click", function() {
    document.body.style.background = "#F3F589";
    colorBox.style.visibility = "visible"
    colorBox.innerHTML = "Pastel Yellow"
    getMenu.style.visibility = "hidden";
})

changeBgPink.addEventListener("click", function() {
    document.body.style.background = "#FFBAD9";
    colorBox.style.visibility = "visible"
    colorBox.innerHTML = "Pastel Pink"
    getMenu.style.visibility = "hidden";
})

changeBgBlue.addEventListener("click", function() {
    document.body.style.background = "#C0F5F7";
    colorBox.style.visibility = "visible"
    colorBox.innerHTML = "Pastel Blue"
    getMenu.style.visibility = "hidden";
})

changeBgGreen.addEventListener("click", function() {
    document.body.style.background = "#ABF3C8";
    colorBox.style.visibility = "visible"
    colorBox.innerHTML = "Pastel Green"
    getMenu.style.visibility = "hidden";
})

