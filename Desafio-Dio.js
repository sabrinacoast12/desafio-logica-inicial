let nome = "Sabrina Lendária"
let Xp = 2567
let nível;

if (Xp < 1000) {
    nível = "Ferro";
}
else if (Xp >= 1001 && Xp <= 2000){
    nível = "Bronze"
}
else if (Xp >= 2001 && Xp <=5000){
    nível = "Prata"
}
else if (Xp >= 5001 && Xp <=7000){
    nível = "Ouro"
}
else if (Xp >= 7001 && Xp <= 8000){
    nível = "Platina"
}
else if (Xp >= 8001 && Xp <= 9000){
    nível = "Ascendente"
}
else if (Xp >= 9001 && Xp <= 10000){
    nível = "Imortal"
}
else if (Xp >= 10001){
    nível = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nível)