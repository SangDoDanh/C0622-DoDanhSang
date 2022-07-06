let btnYes = document.getElementById('btn-yes'), 
    btnNo = document.getElementById('btn-no');

console.log(btnYes, btnNo)

btnYes.addEventListener('click', function() {
    alert('<3')
});

function move() {
    let height = Math.floor(Math.random() * window.innerHeight), 
        width = Math.floor(Math.random() * window.innerWidth);
    btnNo.style.position = 'relative'
    btnNo.style.left = width + 'px'
    btnNo.style.left = height + 'px'

}

btnNo.addEventListener('mouseover', move)