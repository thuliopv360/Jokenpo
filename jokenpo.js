// Para esse projeto, os requisitos fundamentais serão:
// 7 - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// 8 - Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

console.clear();
const prompt = require("prompt-sync")();

let rodadas = +prompt("Digite suas rodadas: ");
const elementos = ["pedra", "papel", "tesoura"];
console.log("Digite sua escolha no jokenpo");
console.log("sendo para responder voce digita (pedra) (papel) (tesoura)");
let chute;
let computador;
let contador = 0;
let vitorias = 0;
let derrotas = 0;
let empate = 0;
let vitoriasComputador = 0;
let derrotasComputador = 0;


while (contador < rodadas) {
    chute = prompt("Digite sua resposta no jogo, voce escolhe pedra, papel ou tesoura? ").toLowerCase()
    computador = Math.floor(Math.random() * 4);
    if (computador == 1 /*pedra*/ ) {
        elementos[0];
        if (chute == "pedra") {
            empate++;
            contador++;
        } else if (chute == "papel") {
            derrotasComputador++;
            vitorias++;
            contador++;
        } else if (chute == "tesoura") {
            vitoriasComputador++;
            derrotas++;
            contador++;
        } else {
            console.error("Resposta errada");
        }
    } else if (computador == 2 /* papel */ ) {
        elementos[1];
        if (chute == "pedra") {
            vitoriasComputador++;
            derrotas++;
            contador++;
        } else if (chute == "papel") {
            empate++;
            contador++;
        } else if (chute == "tesoura") {
            derrotasComputador++;
            vitorias++;
            contador++;
        } else {
            console.error("Resposta errada");
        }
    } else if (computador == 3 /* tesoura */ ) {
        elementos[2];
        if (chute == "pedra") {
            derrotasComputador++;
            vitorias++;
            contador++;
        } else if (chute == "papel") {
            vitoriasComputador++;
            derrotas++;
            contador++;
        } else if (chute == "tesoura") {
            empate++;
            contador++;
        } else {
            console.error("Resposta errada");
        }
    }
}
console.log();
console.log(`De ${rodadas} rodadas voce teve ${vitorias} vitorias ${derrotas} derrotas e ${empate} empates`);
console.log(`De ${rodadas} rodadas o computador teve ${vitoriasComputador} vitorias ${derrotasComputador} derrotas e ${empate} empates`);
console.log();
if (vitorias > vitoriasComputador) {
    console.log(`Voce foi o grande compeao com ${vitorias} vitorias`)
} else if (vitorias == vitoriasComputador) {
    console.log(`Nao ouve um campeao teve ${empate} empates`)
} else if (vitorias < vitoriasComputador) {
    console.log(`O computador foi o grande compeao com ${vitorias} vitorias`)
}