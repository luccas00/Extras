
class Animal {
    
    _nome;
    _peso;
    _idade;

    constructor(nome, peso) {
        this._nome = nome;
        this._peso = peso;
        this._idade = 0;
    }

    InfoAnimal() {
        console.log(`\nNome: ${this._nome}\nPeso: ${this._peso}\nIdade: ${this._idade}`);
    }

    SetNome(nome) {
        this._nome = nome;
    }

}

module.exports = {Animal};