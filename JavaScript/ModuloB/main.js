const { Cliente } = require("./Componentes/Cliente");
const { Empregado } = require("./Componentes/Empregado");
const { Pessoa } = require("./Componentes/Pessoa");
const { Vendedor } = require("./Componentes/Vendedor");
const { Gerente } = require("./Componentes/Gerente");

//Main
(function () {

    let p1 = new Pessoa("Luccas", "Masculino");
    p1.InfoPessoa();

    let cliente1 = new Cliente("Gandalf", "Masculino");
    cliente1.InfoCliente();

    let empregado1 = new Empregado("Saruman", "Masculino");
    empregado1.InfoEmpregado();

    let vendedor1 = new Vendedor("Galadriel", "Feminino");
    vendedor1.InfoVendedor();

    let gerente1 = new Gerente("Arwen", "Feminino", "001");
    gerente1.InfoGerente();

})();