class Cat {
    constructor(name, weight, maxSpeed, isLive) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.isLive = isLive;
    }

    // get
    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getIsLive() {
        return this.isLive;
    }

    // set
    setName(name) {
        this.name = name;
    }

    setMaxSpeed(speed) {
        this.maxSpeed = speed;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setIsLive(isLive) {
        this.isLive = isLive;
    }

    say() {
        console.log(`[${this.name}] Meo meo ...`);
    }

    // mothods...

    showInfo() {
        return `[${this.name}] weight: ${this.weight} is Live: ${this.isLive} Max Speed: ${this.maxSpeed}`;
    }

    catchMouse(mouse) {
        if(this.maxSpeed > mouse.maxSpeed) {
            console.log(`[${this.name}] Đã bắt được [${mouse.getName()}]`);
        } else {
            console.log('Quá béo... không đuổi được chuột ^^!');
        }
    }

    eat(mouse) {
        mouse.setIsLive(false);
        this.setWeight(this.getWeight() + mouse.getWeight());
        console.log(`[${this.name}] đã thịt luộc [${mouse.getName()}]`);
    }
}

class Mouse {
    constructor(name, weight, maxSpeed, isLive) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.isLive = isLive;
    }

    // get
    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getIsLive() {
        return this.isLive;
    }

    // set
    setName(name) {
        this.name = name;
    }

    setMaxSpeed(speed) {
        this.maxSpeed = speed;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setIsLive(isLive) {
        this.isLive = isLive;
    }

    say() {
        console.log(`[${this.name}] Chit Chit ...`);
    }

    // mothods...

    showInfo() {
        return `[${this.name}] weight: ${this.weight} is Live: ${this.isLive} Max Speed: ${this.maxSpeed}`;
    }
}

// khoi tao 1 con meo 1 con chuot

let tom = new Cat('Tom', 3.3, 20, true);
let jerry = new Cat('Jerry', 0.6, 15, true);
// Xem thông tin tom và jerry
console.log(tom.showInfo());
console.log(jerry.showInfo());

// tom bắt jerry
tom.catchMouse(jerry);
// tom thịt luộc jerry
tom.eat(jerry);
// xem lại thông tin tom và jerry
console.log(tom.showInfo());
console.log(jerry.showInfo());