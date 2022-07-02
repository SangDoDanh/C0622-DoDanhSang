var eAmount = document.getElementById('amount-id'), 
    eFromCurr = document.getElementById('from-curr-id'), 
    eToCurr = document.getElementById('to-curr-id'), 
    eResult = document.getElementById('result-id'), 
    eConvert = document.getElementById('convert-button-id');


console.log(eFromCurr.value);
function usdToVnd (values) {
    return values * 23000;
}

function usdToVnd (values) {
    return values / 23000;
}

eFromCurr.addEventListener('change', function(e) {
    if(e.target.value === 'vnd') {
        eToCurr.value = 'usd'
    } else {
        eToCurr.value = 'vnd'
    }
});

eConvert.addEventListener('click', function(e) {
    var amount = parseFloat(eAmount.value);
    var result;
    if(eFromCurr.value === 'usd') {
        result = amount * 23000;
        eResult.value = result + ' VND';
    } else {
        result = amount / 23000;
        eResult.value = result + ' USD';
    }
    
})
