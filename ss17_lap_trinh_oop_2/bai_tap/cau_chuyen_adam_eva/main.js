class Humman {
    constructor(name, weigth, gender) {
        this.name = name;
        this.weigth = weigth;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }
    getWeight() {
        return this.weigth;
    }
    getGender() {
        return this.gender;
    }

    setName(name) {
        this.name = name;
    }
    eat(food) {
        food.energy();
    }

    say(words) {
        console.log(`[${this.name}] : '${words}'`);
    }

    showInfo() {
        let res = `[${this.name}] GenDer: ${this.gender} Weight: ${this.weigth}`;
        return res;
    }
}

class Apple {
    constructor(appleName, weigth) {
        this.appleName = appleName;
        this.weigth = weigth;
    }

    energy() {
        if(this.weigth > 0) {
            this.weigth --;
        }
    }

    showInfo() {
        return `[${this.appleName} Weight: ${this.weigth}]`;
    }
}

// de mo
// Tạo 2 đối tượng human là adam và eva, tạo 1 quả táo có đơn vị là 10
let adam = new Humman('Adam', 70, 'Male');
let eva = new Humman('Eva', 55, 'Fmale');
let apple = new Apple('Apple-Red', 10);

// Show thông tin hai đối tượn mới tạo
console.log(adam.showInfo());
console.log(eva.showInfo());

// Adam nói chuyện, eva nói chuyện
adam.say('Hello word ');
eva.say('Hello word ');

//Thong tin quả táo
console.log('Apple info')
console.log(apple.showInfo());
// adam ăn tao và eava ăn táo
adam.eat(apple);
eva.eat(apple);
// thông tin quả táo sau ăn
console.log('Quả táo sau ăn');
console.log(apple.showInfo());
