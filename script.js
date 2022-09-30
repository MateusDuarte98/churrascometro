// carne - 400 gr por pessoa + de 6 horas - 650
// carveja - 1200ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalRefrigerante = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<P>${qtdTotalCarne / 1000} kg de carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja / 1000} L de cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalRefrigerante / 1000} Refrigerantes</p>`

}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 6000;
    } else {
        return 3000;
    }
}

function refriPP(duracao){
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
