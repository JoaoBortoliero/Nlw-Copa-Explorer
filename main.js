function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" 
            alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" 
            alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.3;

function createCard(date, day, games) {
    delay += 0.3;
    return ` 
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}                                                      
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML= 
        createCard(
            "21/11",
            "segunda",
                createGame(
                    "brazil",
                    "08:00",
                    "cameroon"
                ) + 
                createGame(
                    "hungary",
                    "13:00",
                    "argentina"
                ) +
                createGame(
                    "colombia",
                    "20:00",
                    "japan"
                )
        ) +
        createCard(
            "24/11", 
            "quinta",
                createGame(
                    "british columbia",
                    "08:00",
                    "cameroon"
                ) + 
                createGame(
                    "india",
                    "13:00",
                    "armenia"
                ) + 
                createGame(
                    "brazil",
                    "16:00",
                    "serbia"
                ) +
                createGame(
                    "comoros",
                    "20:00",
                    "jordan"
                )
        ) +
        createCard(
            "24/11", 
            "quinta",
                createGame(
                    "british columbia",
                    "08:00",
                    "cameroon"
                ) + 
                createGame(
                    "india",
                    "13:00",
                    "armenia"
                ) + 
                createGame(
                    "brazil",
                    "16:00",
                    "serbia"
                ) +
                createGame(
                    "comoros",
                    "20:00",
                    "jordan"
                )
        )     


