var gameResultText = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// for value "1" expected output is: 0
// for value "4" expected output is: 0, 1, 2 or 3

function getComputerChoice() {
    let x = getRandomInt(3);

    if (x == 0) {
        gameResultText += "  Komputer gra: Kamien\n";
        return "K";
    }
    else if (x == 1) {
        gameResultText += "  Komputer gra: Papier\n";
        return "P";
    }
    else if (x == 2){
        gameResultText += "  Komputer gra: Nozyczki\n";
        return "N";
    }
    else {
        gameResultText += "!!! Blad kodu getComputerChoice\n";
        return "!!!";
    }
}

function getHumanChoice() {
    let answear = prompt("Kamien, Papier, Nozyczki. Co grasz? :");

    answear = answear.toLowerCase();
    if (answear == "kamien") {
        gameResultText += "  Gracz gra: Kamien\n";
        return "K";
    }
    else if (answear == "papier") {
        gameResultText += "  Gracz gra: Papier\n";
        return "P";
    }
    else if (answear == "nozyczki") {
        gameResultText += "  Gracz gra: Nozyczki\n";
        return "N";
    }
    else {
        gameResultText += "!!! Blad kodu getHumanChoice\n";
        return "!!!";
    }
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice =="!!!" || computerChoice =="!!!") {
        gameResultText += "Blad rundy\n\n";
        return "!!!"
    }

    if (humanChoice == "K") {
        if (computerChoice == "K") {
            gameResultText += "    Kamien i Kamien - Remis\n\n";
            return 0;
        }
        else if (computerChoice == "P") {
            gameResultText += "    Kamien i Papier - Przegrywasz\n\n";
            return -1;
        }
        else if (computerChoice == "N") {
            gameResultText += "    Kamien i Nozyczki - Wygrywasz\n\n";
            return 1;
        }
    }

    if (humanChoice == "P") {
        if (computerChoice == "K") {
            gameResultText += "    Papier i Kamien - Wygrywasz\n\n";
            return 1;
        }
        else if (computerChoice == "P") {
            gameResultText += "    Papier i Papier - Remis\n\n";
            return 0;
        }
        else if (computerChoice == "N") {
            gameResultText += "    Papier i Nozyczki - Przegrywasz\n\n";
            return -1;
        }
    }

    else if (humanChoice == "N") {
        if (computerChoice == "K") {
            gameResultText += "    Nozyczki i Kamien - Przegrywasz\n\n";
            return -1;
        }
        else if (computerChoice == "P") {
            gameResultText += "    Nozyczki i Papier - Wygrywasz\n\n";
            return 1;
        }
        else if (computerChoice == "N") {
            gameResultText += "    Nozyczki i Nozyczki - Remis\n\n";
            return 0;
        }
    }
}



function playGame(rounds) {

    if (!Number.isInteger(rounds)) {
        gameResultText += "!!! !!! !!!\n";
        gameResultText += "!!! Podana liczba rund nie jest wartoscia liczbowa\n";
        gameResultText += "!!! Opuszczam gre\n";
        gameResultText += "!!! !!! !!!\n";
        return;
    }

    let result = 0;
    for (let i=1; i <= rounds; i++) {
        gameResultText += "# Runda " + i + "\n";
        let roundResult = playRound(getHumanChoice(), getComputerChoice());

        if (roundResult == "!!!") {
            gameResultText += "!!! !!! !!!\n";
            gameResultText += "!!! Blad gry w rundzie " + i + "\n";
            gameResultText += "!!! Opuszczam runde " + i + "\n";
            gameResultText += "!!! Opuszczam gre\n";
            gameResultText += "!!! !!! !!!\n";
            break;
        }
        result += roundResult;
    }

    if (result > 0) {
        gameResultText += "################### #\n";
        gameResultText += "Wygrales z wynikiem " + result + "\n";
    }
    if (result < 0) {
        gameResultText += "##################### ##\n";
        gameResultText += "Przegrales z wynikiem " + result + "\n";
    }
    if (result = 0) {
        gameResultText += "##### #\n";
        gameResultText += "Remis " + result + "\n";
    }

    document.getElementById("game").innerHTML = gameResultText;
}

const rounds = parseInt(prompt("Ile rund gramy :"));
playGame(rounds);

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/