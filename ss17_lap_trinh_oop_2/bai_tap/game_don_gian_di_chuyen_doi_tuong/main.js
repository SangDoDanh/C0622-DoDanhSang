class Hero{
    constructor(top, left, bottom, right, width, height, src, id) {
        this.top = top;
        this.left = left;
        this.bottom = bottom;
        this.right = right;
        this.width = width;
        this.height = height;
        this.src = src;
        this.id = id;
        this.style = `position: absolute; top: ${this.top}; left: ${this.left}`;
    }

    setTop(value) {
        this.top = value;
    }
    setRight(value) {
        this.right = value;
    }
    setLeft(value) {
        this.left = value;
    }
    setbBottom(value) {
        this.bottom = value;
    }

    getElemment() {
        return document.getElementById(`${this.id}`);
    }
    //Lấy giá trị không lấy px
    getValue(value) {
        let start = value.indexOf('p');
        value = value.slice(0, start);
        value = parseInt(value);
        return value;
    }

    moveLeft(value) {
        let eHero = this.getElemment();
        let leftHero = eHero.style.left;
        
        leftHero = this.getValue(leftHero);

        eHero.style.left = (leftHero - value) + 'px';
    }
    moveRight(value) {
        let eHero = this.getElemment();
        let leftHero = eHero.style.left;
        leftHero = this.getValue(leftHero);
        eHero.style.left = leftHero + value + 'px';
    }
    moveTop(value) {
        let eHero = this.getElemment();
        let topHero = eHero.style.top;
        topHero = this.getValue(topHero);
        eHero.style.top = (topHero - value) + 'px';
    }
    moveBottom(value) {
        let eHero = this.getElemment();
        let topHero = eHero.style.top;
        topHero = this.getValue(topHero);
        eHero.style.top = topHero + value + 'px';
    }

    renderHTML() {
        let sources = `<img id="${this.id}"
                            src="${this.src}" 
                            style="${this.style}" 
                            width="${this.width}">`;
        return sources;
    }
}

let eApp = document.querySelector('.app');
let hero = new Hero(0, 0, 0, 0, 200, 200, 'pikachu.png', 'img-pikachu');

eApp.innerHTML = hero.renderHTML();

let runInterVal = setInterval(() => {
    // hero.moveRight(1);
    let eHero = hero.getElemment();
    let left = hero.getValue(eHero.style.left);
    let top = hero.getValue(eHero.style.top);
    let wWidth = window.innerWidth - 1;
    let wHeight = window.innerHeight - 1;
    if(left + 200 <= wWidth && top == 0) {
        hero.moveRight(1);
    } else if(left == wWidth - 199 && top < wHeight - 199){        
        hero.moveBottom(1);
    } else if(left > 0 && left <= wWidth - 199 && top == (wHeight - 199)){
        hero.moveLeft(1);
    } else if(left == 0 && top <= (wHeight - 199)){
        hero.moveTop(1);
        // clearInterval(runInterVal);
    }
}, 2);