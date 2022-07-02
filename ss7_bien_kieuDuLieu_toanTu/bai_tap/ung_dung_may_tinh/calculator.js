var value1 = document.getElementById('value1'), 
    value2 = document.getElementById('value2'),
    add = document.getElementById('addtion'),
    sub = document.getElementById('subtraction'),
    mun = document.getElementById('muntiplication'),
    result = document.getElementById('result'),
    div = document.getElementById('division');

   
add.addEventListener('click', function(e) {
    result.value = parseFloat(value1.value) + parseFloat(value2.value);
});

sub.addEventListener('click', function(e) {
    result.value = parseFloat(value1.value) - parseFloat(value2.value);
});

mun.addEventListener('click', function(e) {
    result.value = parseFloat(value1.value) - parseFloat(value2.value);
});

div.addEventListener('click', function(e) {
    if(value2.value != 0) {
        result.value = parseFloat(value1.value) / parseFloat(value2.value);
    } else {
        result.value = 'invalid number';
    }
});