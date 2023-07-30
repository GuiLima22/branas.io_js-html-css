class Teste {
    constructor(x, y){
        this.x = x
        this.y = y
    };

    somar() {
        return this.x + this.y
    };

    subtrair() {
        return this.x - this.y
    }
};

class MaisTeste{
    constructor(){
        this.test = new Teste(2, 4);
    }

    sumfunction(){
        return this.test.somar;
    }

    maisUmTest(){
        console.log(this.sumfunction())
    }
}

const outrotest = new MaisTeste()
outrotest.maisUmTest()