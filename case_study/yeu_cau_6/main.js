let ebtnRandom = document.querySelector('.btn-random');
let eDisplay = document.querySelector('.group-display');
let eBtnpay = document.querySelector('.btn-pay');
let eResult = document.querySelector('.group-result');
let eCheck = document.querySelector('.btn-check');
let dataTickets = []; // lưu vé số người dùng mua
let dataResult = []; // lưu kết quả vé số trúng

// Tạo giá trị vé số ngẫu nhiên
function createArrRandom(number) {
    let result = [];
    for(let i = 0; i < number; i++) {
        let numberRandom = Math.floor(Math.random() * (99 - 0) ) + 0;
        result.push(numberRandom);
    }
    return result;
}

//Tạo giá trị vé số ngẫu nhiên trên html
function createNumberRandom() {
    let data = createArrRandom(6);
    console.log(data);
    let eNumbersList = document.querySelectorAll('.number');
    for(let i in eNumbersList) {
        eNumbersList[i].value = data[i];
    }
}

// Click mua vé số
function buyTicket(){
    let dataTicket = [];
    let eNumbersList = document.querySelectorAll('.number');
    for(let number of eNumbersList) {
        dataTicket.push(number.value);
    }
    dataTickets.push(dataTicket);
    console.log(dataTickets);
    eDisplay.innerHTML = renderHTML(dataTickets);
}

// tạo source html cho dãy số
function renderHTML(arr) {
    let sourse = '';
    for(let i = 0; i < arr.length; i++) {
        sourse+= '<div class="group-ticket">';
        for(let j = 0; j < arr[i].length; j++) {
            sourse += `<input type="number" disabled class="number-ticket" value="${arr[i][j]}">`;
        }
        sourse +='</div>'
    }
    return sourse;
}

// Dò kết quả
function luckyNumbers() {
    let luckyTikets = createArrRandom(6);
    let lucky = dataTickets.includes(luckyTikets);
    let res = '';
    if(lucky){
        res += `<h3 class="heading-result">Kết Quả Xổ Số</h3>`;
        res += renderHTML([luckyTikets]);
        res += `<h3>Xin Chúc Mừng! bạn đã trúng</h3>`;
    } else{
        res += `<h3 class="heading-result">Kết Quả Xổ Số</h3>`;
        res += renderHTML([luckyTikets]);
        res +=`<h3>Chúc bạn may mắn lần sau!</h3>`;
    }
    eResult.innerHTML = res;
}

eCheck.addEventListener('click', luckyNumbers)
eBtnpay.addEventListener('click', buyTicket);
ebtnRandom.addEventListener('click', createNumberRandom);
