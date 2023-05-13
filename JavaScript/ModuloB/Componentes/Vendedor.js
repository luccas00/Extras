const { Empregado } = require("./Empregado");

class Vendedor extends Empregado {

    _valorVendas;
    _comissao;

    constructor(nome, sexo) {
        super(nome, sexo);
        this._comissao = 0.05;
        this._valorVendas = 0;
    }

    InfoVendedor() {
        super.InfoEmpregado();
        console.log(`Vendedor\nComissao ${this._comissao*100}%\nValor de Vendas R$ ${this._valorVendas}\n`);
    }

}

module.exports = { Vendedor };