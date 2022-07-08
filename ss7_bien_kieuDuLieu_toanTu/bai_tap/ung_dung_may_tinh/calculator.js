let value1 = document.getElementById('value1'); 
let value2 = document.getElementById('value2');
let add = document.getElementById('addtion');
let sub = document.getElementById('subtraction');
let mun = document.getElementById('muntiplication');
let result = document.getElementById('result');
const div = document.getElementById('division');

   
add.addEventListener('click', function() {
    result.value = parseFloat(value1.value) + parseFloat(value2.value);
});

sub.addEventListener('click', function() {
    result.value = parseFloat(value1.value) - parseFloat(value2.value);
});

mun.addEventListener('click', function() {
    result.value = parseFloat(value1.value) - parseFloat(value2.value);
});

div.addEventListener('click', function() {
    if(value2.value != 0) {
        result.value = parseFloat(value1.value) / parseFloat(value2.value);
    } else {
        result.value = 'invalid number';
    }
});