let button = document.getElementById('mybutton');
let buttonChangeBg = document.querySelector('.btn-background'); 
let body = document.querySelector('.blue-background');

button.addEventListener("click", function(){
    alert('Button clicked!');
})


buttonChangeBg.addEventListener("click", function() {
    body.classList.toggle("red-background");
})