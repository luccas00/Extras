const { Pessoa } = require("./Pessoa");

class Cliente extends Pessoa{

    _saldo;
    _divida;

    constructor(nome, sexo) {
        super(nome, sexo)
        this._saldo = 0.0;
        this._divida = 0.0;
    }

    InfoCliente() {
        super.InfoPessoa();
        console.log(`Dados Bancarios\nSaldo R$ ${this._saldo}\nDivida R$ ${this._divida}\n`);
    }

    SetDivida(value) {
        this._divida = value;
    }

    Deposito(value) {
        this._saldo += value;
    }

    Saque(value) {
        if(this._saldo < value) {
            console.log("Saldo insuficiente\nTente novamente");
        } else {
            this._saldo -= value;
        }
    }
}

module.exports = {Cliente};