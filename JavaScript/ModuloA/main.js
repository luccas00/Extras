const { Cachorro } = require("./Componentes/Cachorro");
const { Peixe } = require("./Componentes/Peixe");

//Main
(function () {

    let p1 = new Peixe("Salmao", 20, "Agua Salgada");
    p1.InfoPeixe();

    let c1 = new Cachorro("Bob", 35, "Pit Bull");
    c1.InfoCachorro();

    let array = [];
    array.push(p1);
    array.push(c1);
    console.log(array.length);

})();