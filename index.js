class Frog {
    constructor(name, jumpStrength, color) {
        this.name = name;
        this.legs = 4;
        this.jumpStrength = jumpStrength;
        this.color = color;
    }
}

// dougie

const dougie = new Frog('Dougie', 68, 'orange')
// new instance of Frog has been created

const qas = true;

module.exports = {
    Frog,
    dougie,
}