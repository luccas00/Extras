//Main
(function () {

    console.log(`Result = ${Recursiva(3)}`);

})();

function Recursiva(n) {
    if(n == 1) {
        return 1;
    } else if(n == 2) {
        return 2;
    } else {
        return 2 * Recursiva(n - 1) + 3 * Recursiva(n - 2);
    }
}