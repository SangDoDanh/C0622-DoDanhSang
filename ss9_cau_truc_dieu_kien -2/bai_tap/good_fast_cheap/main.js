let eGfcList = document.querySelectorAll('.gfc'),
    count = 0;

// checkbox handle click
function clickCheckbox (e) {
    
    let eCheckbox = e.target
    if(count <= eGfcList.length && count >= 0) {
        eCheckbox.classList.add('checked')
        if(eCheckbox.checked == true) {
            count ++;
        } else {
            count --;
        }
    }
    if(count == eGfcList.length) {
        let eCheckedList = document.querySelectorAll('.checked')
        let checkRandom = Math.floor(Math.random() * eCheckedList.length)

        while(eCheckbox.className == eCheckedList[checkRandom].className) {
            checkRandom = Math.floor(Math.random() * eCheckedList.length)
        }
        let eCheckboxRandom = eCheckedList[checkRandom]
        eCheckboxRandom.checked = false
        eCheckboxRandom.classList.remove('checked')
        count --;
    }
    
}

for(gfc of eGfcList) {
    gfc.addEventListener('click', clickCheckbox) 
}

