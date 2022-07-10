let eValueInput = document.getElementById('value-input');
let key = 'ahihi đồ ngốc!';
let index = 0;
let source = '';
key = key.split('');

function write() {
    eValueInput.value = '';
    if(index > key.length - 1) {
        index = 0;
        source = '';
    }
    source += key[index];
    eValueInput.value = source;
    index++;
}

eValueInput.addEventListener('keyup', function() {
    eValueInput.value = '';
    eValueInput.value = source;
});
eValueInput.addEventListener('keypress', write);