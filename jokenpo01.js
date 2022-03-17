// 8 - Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

console.clear();
const prompt = require("prompt-sync")();

let usuario = prompt("Digite os seu nome: ")
let rodadas;
let jogo = ["pedra", "papel", "tesoura"];
let chute;
let computador;
let vitoriaComputador = 0;
let vitoriaUsuario = 0;
let empate = 0;
let resposta;

while (resposta = "sim") {
    rodadas = +prompt("Digite quantas rodadas serao jogadas: ")
    for (let i = 0; i < rodadas;) {
        computador = jogo[ /*Math.floor(Math.random() * 3)*/ 2];
        chute = prompt("Digite seu chute entre pedra, papel, tesoura: ").toLowerCase()
        if (chute == "pedra") {
            jogo[0];
            if (computador == "pedra") {
                empate++;
            } else if (computador == "papel") {
                vitoriaComputador++;
            } else if (computador == "tesoura") {
                vitoriaUsuario++;
            }
            i++;
        } else if (chute == "papel") {
            jogo[1];
            if (computador == "pedra") {
                vitoriaUsuario++;
            } else if (computador == "papel") {
                empate++;
            } else if (computador == "tesoura") {
                vitoriaComputador++;
            }
            i++;
        } else if (chute == "tesoura") {
            jogo[2];
            if (computador == "pedra") {
                vitoriaComputador++;
            } else if (computador == "papel") {
                vitoriaUsuario++;
            } else if (computador == "tesoura") {
                empate++;
            }
            i++;
        } else {
            console.log("Chute invalido ");
        }
    }
    resposta = prompt("Deseja jogar novamente? ").toLowerCase();
    if (resposta = "nao") {
        if (vitoriaUsuario > vitoriaComputador) {
            console.log(`O usuario ${usuario} teve ${vitoriaUsuario} vitorias`);
            break;
        } else if (vitoriaComputador > vitoriaUsuario) {
            console.log(`O computador teve ${vitoriaComputador} vitorias`);
            break;
        } else if (empate > (vitoriaUsuario || vitoriaComputador)) {
            console.log(`Nao teve vitoria teve ${empate} empates`);
            break;
        }
    }
}