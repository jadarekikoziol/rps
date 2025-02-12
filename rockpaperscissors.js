var gameResultText = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// for value "1" expected output is: 0
// for value "4" expected output is: 0, 1, 2 or 3

function getComputerChoice() {
    let x = getRandomInt(3);

    if (x == 0) {
        console.log("  Komputer gra: Kamien");
        return "K";
    }
    else if (x == 1) {
        console.log("  Komputer gra: Papier");
        return "P";
    }
    else if (x == 2){
        console.log("  Komputer gra: Nozyczki");
        return "N";
    }
    else {
        console.log("!!! Blad kodu getComputerChoice");
        return "!!!";
    }
}

function getHumanChoice() {
    let answear = prompt("Kamien, Papier, Nozyczki. Co grasz? :");

    answear = answear.toLowerCase();
    if (answear == "kamien") {
        console.log("  Gracz gra: Kamien");
        return "K";
    }
    else if (answear == "papier") {
        console.log("  Gracz gra: Papier");
        return "P";
    }
    else if (answear == "nozyczki") {
        console.log("  Gracz gra: Nozyczki");
        return "N";
    }
    else {
        console.log("!!! Blad kodu getHumanChoice");
        return "!!!";
    }
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice =="!!!" || computerChoice =="!!!") {
        console.log("Blad rundy");
        console.log("\n");
        return "!!!"
    }

    if (humanChoice == "K") {
        if (computerChoice == "K") {
            console.log("    Kamien i Kamien - Remis");
            console.log("\n");
            return 0;
        }
        else if (computerChoice == "P") {
            console.log("    Kamien i Papier - Przegrywasz");
            console.log("\n");
            return -1;
        }
        else if (computerChoice == "N") {
            console.log("    Kamien i Nozyczki - Wygrywasz");
            console.log("\n");
            return 1;
        }
    }

    if (humanChoice == "P") {
        if (computerChoice == "K") {
            console.log("    Papier i Kamien - Wygrywasz");
            console.log("\n");
            return 1;
        }
        else if (computerChoice == "P") {
            console.log("    Papier i Papier - Remis");
            console.log("\n");
            return 0;
        }
        else if (computerChoice == "N") {
            console.log("    Papier i Nozyczki - Przegrywasz");
            console.log("\n");
            return -1;
        }
    }

    else if (humanChoice == "N") {
        if (computerChoice == "K") {
            console.log("    Nozyczki i Kamien - Przegrywasz");
            console.log("\n");
            return -1;
        }
        else if (computerChoice == "P") {
            console.log("    Nozyczki i Papier - Wygrywasz");
            console.log("\n");
            return 1;
        }
        else if (computerChoice == "N") {
            console.log("    Nozyczki i Nozyczki - Remis");
            console.log("\n");
            return 0;
        }
    }
}



function playGame(rounds) {

    if (!Number.isInteger(rounds)) {
        console.log("!!! !!! !!!");
        console.log("!!! Podana liczba rund nie jest wartoscia liczbowa");
        console.log("!!! Opuszczam gre");
        console.log("!!! !!! !!!");
        return;
    }

    let result = 0;
    for (let i=1; i <= rounds; i++) {
        console.log("# Runda " + i);
        let roundResult = playRound(getHumanChoice(), getComputerChoice());

        if (roundResult == "!!!") {
            console.log("!!! !!! !!!");
            console.log("!!! Blad gry w rundzie " + i);
            console.log("!!! Opuszczam runde " + i);
            console.log("!!! Opuszczam gre");
            console.log("!!! !!! !!!");
            break;
        }
        result += roundResult;
    }

    if (result > 0) {
        console.log("################### #");
        console.log("Wygrales z wynikiem " + result);
    }
    if (result < 0) {
        console.log("##################### ##");
        console.log("Przegrales z wynikiem " + result);
    }
    if (result = 0) {
        console.log("##### #");
        console.log("Remis " + result);
    }
}


const rounds = parseInt(prompt("Ile rund gramy :"));
playGame(rounds);

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/




document.getElementById("game").innerHTML = gameResultText;