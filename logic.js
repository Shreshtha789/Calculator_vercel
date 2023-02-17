//e.preventDefault();

let giveVal = document.querySelector('#inputNumber'); //give value to input


let takeVal; //take input value


let number = 0;



let clear = document.getElementById('clear');
clear.addEventListener('click',function(e) {
    e.preventDefault();
    giveVal.value = '';
});


let deleteValue = document.getElementById('delete');
deleteValue.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    /*
    let arrayVal = takeVal.split('');
    arrayVal.pop();
    console.log(arrayVal);
    giveVal.value = arrayVal.join('');
    */
    let arrayVal = takeVal.slice(0,-1);
    giveVal.value = arrayVal;
});



let dot = document.getElementById('dot');
dot.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.querySelector('#inputNumber').value; //take input value
    giveVal.value = takeVal + '.';
});


//divide
let divide = document.getElementById('divide');
divide.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '/';
});


let seven = document.getElementById('seven');
seven.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '7';
});


let eight = document.getElementById('eight');
eight.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '8';
});


let nine = document.getElementById('nine');
nine.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '9';
});


//multiply
let multiply = document.getElementById('multiply');
multiply.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '*';
});


let four = document.getElementById('four');
four.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '4';
});


let five = document.getElementById('five');
five.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '5';
});


let six = document.getElementById('six');
six.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '6';
});


//subtract
let subtract = document.getElementById('subtract');
subtract.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '-';
});


let one = document.getElementById('one');
one.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '1';
});


let two = document.getElementById('two');
two.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '2';
});


let three = document.getElementById('three');
three.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '3';
});


//add
let add = document.getElementById('add');
add.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '+';

});


let doubleZero = document.getElementById('doubleZero');
doubleZero.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '00';
});


let zero = document.getElementById('zero');
zero.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = document.getElementById('inputNumber').value;
    giveVal.value = takeVal + '0';
});


let equalto = document.getElementById('equalto');
equalto.addEventListener('click',function(e){
    e.preventDefault();
    takeVal = eval(giveVal.value);
    giveVal.value = `${takeVal}`;
})
