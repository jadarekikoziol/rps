var gameResultText = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// for value "1" expected output is: 0
// for value "4" expected output is: 0, 1, 2 or 3

function getComputerChoice() {
    let x = getRandomInt(3);
    return x === 0 ? "K" : x === 1 ? "P" : x === 3 ? "N" : "!getComputerChoice error!";
}

function getHumanChoice() {
    let answear = prompt("Kamien, Papier, Nozyczki. Co grasz? :").toLowerCase();

    return answear === "kamien" ? "K" : answear === "papier" ? "P" : answear === "nozyczki" ? "N" : "!getHumanChoice error!";
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "K" && computerChoice === "K") return ["Kamień i Kamień", "Remis"];
    if (humanChoice === "K" && computerChoice === "P") return ["Kamień i Papier", "Przegrywasz"];
    if (humanChoice === "K" && computerChoice === "N") return ["Kamień i Nożyczki", "Wygrywasz"];

    if (humanChoice === "P" && computerChoice === "K") return ["Papier i Kamień", "Wygrywasz"];
    if (humanChoice === "P" && computerChoice === "P") return ["Papier i Papier", "Remis"];
    if (humanChoice === "P" && computerChoice === "N") return ["Papier i Nożyczki", "Przegrywasz"];

    if (humanChoice === "N" && computerChoice === "K") return ["Nożyczki i Kamień", "Przegrywasz"];
    if (humanChoice === "N" && computerChoice === "P") return ["Nożyczki i Papier", "Wygrywasz"];
    if (humanChoice === "N" && computerChoice === "N") return ["Nożyczki i Nożyczki", "Remis"];

    if (humanChoice === "!getHumanChoice error!" && computerChoice === "!getComputerChoice error!") return ["Błąd rundy", "!!! getHumanChoice & getComputerChoice error"];
    if (humanChoice === "!getHumanChoice error!") return ["Błąd rundy", "!!! getHumanChoice error"];
    if (computerChoice === "!getComputerChoice error!") return ["Błąd rundy", "!!! getComputerChoice error"];
}



function playGame(rounds) {

    if (!Number.isInteger(rounds)) {
        alert("Podana liczba rund nie jest liczbą całkowitą.");
        return;
    }

    let result = 0;

    let gameDiv = document.getElementById("game");
    gameDiv.innerHTML = ""; // Czyścimy poprzednie wyniki

    let rowDiv;
    for (let i = 1; i <= rounds; i++) {
        if ((i - 1) % 3 === 0) {
            // Co trzecią rundę tworzę nowy wiersz
            rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            gameDiv.appendChild(rowDiv);
        }

        let [description, roundResult] = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === "!!!") break;

        let roundDiv = document.createElement("div");
        roundDiv.classList.add("round");
        roundDiv.innerHTML = `<strong># Runda ${i}:</strong><br>${description}<br>${roundResult}`;
        rowDiv.appendChild(roundDiv);

        result += roundResult === "Wygrywasz" ? 1 : roundResult === "Przegrywasz" ? -1 : 0;
    }

    let finalResult = document.createElement("div");
    finalResult.classList.add("final-result");
    finalResult.innerHTML = `<strong>Wynik końcowy:</strong> ${result > 0 ? "Wygrałeś!" : result < 0 ? "Przegrałeś!" : "Remis!"}`;
    gameDiv.appendChild(finalResult);
}
/*

*/

/*

    const gameTable = document.getElementById("gameTable");
    gameTable.innerHTML = ""; // Czyszczenie tabeli

    let row;
    
    for (let i = 1; i <= rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let [description, result] = playRound(humanChoice, computerChoice);

        // Co 3 rundy tworzymy nowy wiersz w tabeli
        if ((i - 1) % 3 === 0) {
            row = document.createElement("tr");
            gameTable.appendChild(row);
        }

        // Tworzenie komórki rundy
        let cell = document.createElement("td");
        cell.innerHTML = `<div class="round-title"># Runda ${i}:</div>${description}<br><strong>${result}</strong>`;
        row.appendChild(cell);

        // Po każdej trzeciej rundzie dodajemy przerwę
        if (i % 3 === 0 || i === rounds) {
            let separator = document.createElement("tr");
            separator.classList.add("separator");
            gameTable.appendChild(separator);
        }
    }
}

*/
const rounds = parseInt(prompt("Ile rund gramy :"));
playGame(rounds);

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/