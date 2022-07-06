let imgQuarterList = document.querySelectorAll('.image1-4')
let imgUrlVic1 ='', imgUrlVic2 =''
//
for(let i = 1; i <= 4; i++) {
    imgUrlVic1 += 'url("image/image1-'+i+'.png")'
    imgUrlVic2 += 'url("image/image2-'+i+'.png")'
}
// load hinh random
for(imgQuarter of imgQuarterList) {
    let urlIamge14RanDom = Math.floor((Math.random() * 4) + 1);
    let urlRanDom = Math.floor((Math.random() * 2) + 1);
    imgQuarter.style.backgroundImage = 'url("image/image'+urlRanDom+'-'+urlIamge14RanDom+'.png")'
}

// Selected image random
function selectedImageRandom(e) {
    let urlIamge14RanDom = Math.floor((Math.random() * 4) + 1);
    let urlRanDom = Math.floor((Math.random() * 2) + 1);
    let element =  e.target
    element.style.backgroundImage = 
    'url("image/image'+urlRanDom+'-'+urlIamge14RanDom+'.png")'
    victoryaApproval()
}
// Khi click vao image
for(imgQuarter of imgQuarterList) {
    imgQuarter.addEventListener("click", selectedImageRandom);
}

//victorya
function victoryaApproval () {
    let urlVictorya = ''
    for(imgQuarter of imgQuarterList) {
        urlVictorya += imgQuarter.style.backgroundImage
    }

    if(urlVictorya == imgUrlVic1 || urlVictorya == imgUrlVic2) {
        alert('YOU WIN')
    }
}
