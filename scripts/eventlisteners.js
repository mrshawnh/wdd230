const alertButton = document.querySelector('#alert');
const add1 = document.querySelector('#add1');
const keyboard = document.querySelector('#keyboard');
let number = 0;

alertButton.addEventListener('click', () =>{
    alert("This is an alert!")
});

add1.addEventListener('click', () =>{
    number = number + 1;
    document.querySelector('#math').textContent = number;
});

keyboard.addEventListener('keypress', ()=>{
    document.querySelector('#math').textContent = 0;
    keyboard.value = '';
    number = 0;
});

window.addEventListener('resize', ()=>{
    document.querySelector('#resize').innerHTML = Math.random();
});