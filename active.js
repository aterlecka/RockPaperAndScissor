// let rock = document.getElementById("rock");
// let paper = document.getElementById("paper");
// let scissors = document.getElementById("scissors");
// let countForPlayer;
// let countForComputer;
// let x = 0;
//
//
// function myFunction(symbol) {
//     const SYMBOLS = ['rock', 'paper', 'scissors'];
//     //Math random losuje zawsze od 0 do 0.999999
//
//     //losowanie komputera
//     const wylosowanyUlamek = Math.random() * SYMBOLS.length;
//     const zaokraglonyNumer = Math.floor(wylosowanyUlamek);
//     const symbolForComp = SYMBOLS[zaokraglonyNumer];
//     console.log("komp", symbolForComp);
//     console.log("gracz", symbol.innerHTML);
//
//     let winner = compareSymbols(symbol, symbolForComp);
//     showMeResult(winner);
// }
//
//     function showMeResult(win) {
//         let result;
//
//         if (win === x) {
//             document.getElementById("scorePlayer").innerHTML = "remis";
//             document.getElementById('scoreComputer').innerHTML = "remis";
//             // return result = "REMIS"
//         }
//
//         if (win === countForPlayer) {
//             document.getElementById("scorePlayer").innerHTML = countForPlayer;
//             document.getElementById('scoreComputer').innerHTML = countForComputer;
//             // return result = "Wygrał gracz!"
//         }
//
//         if (win === countForComputer) {
//             document.getElementById("scorePlayer").innerHTML = countForPlayer;
//             document.getElementById('scoreComputer').innerHTML = countForComputer;
//             // return result = "wygrał komputer!"
//         }
//         console.log(result)
//         // document.getElementById("scorePlayer").innerHTML = result;
//         // document.getElementById('scoreComputer').innerHTML = result;
//
//
//
//     }
//
//
// function compareSymbols(symbol, symbolForComp) {
//     if (symbol === 'rock') {
//         if (symbolForComp === 'scissors') {
//             countForPlayer+=1;
//         }
//         if (symbolForComp === 'rock') {
//             x+=1;
//         }
//         if (symbolForComp === 'paper') {
//             countForComputer+=1;
//         }
//     }
//
//     if (symbol === 'scissors') {
//         if (symbolForComp === 'scissors') {
//             x+=1;
//         }
//         if (symbolForComp === 'rock') {
//             countForComputer+=1;
//         }
//         if (symbolForComp === 'paper') {
//             countForPlayer+=1;
//         }
//     }
//
//     if (symbol === 'paper') {
//         if (symbolForComp === 'scissors') {
//             countForComputer+=1;
//         }
//         if (symbolForComp === 'rock') {
//             countForPlayer+=1;
//
//         }
//         if (symbolForComp === 'paper') {
//             x+=1;
//         }
//     }
// }
//
//
