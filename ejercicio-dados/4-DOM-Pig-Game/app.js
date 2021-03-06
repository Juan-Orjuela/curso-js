/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, diceImg, gamePlaying;
gamePlaying = true;
diceImg = document.querySelector(".dice");
init();

document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
        //Generar numero aleatorio
        var dice = Math.floor(Math.random() * 6 + 1);
        

        //Mostrar resultado
        diceImg.style.display = 'block';
        diceImg.src = 'dice-' + dice + '.png';

        //document.querySelector("#current-" + activePlayer).textContent = dice;
        //Actualizar score
        if (dice !== 1) {
            //Add Score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            


        } else {
            cambiarJugador();
        }
    }


});
document.querySelector(".btn-hold").addEventListener('click', function () {
    if (gamePlaying) {
        //Agregar el puntaje actual al puntaje global
        scores[activePlayer] += roundScore;
        //Update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Ganador';
            console.log('El jugador ' + (activePlayer + 1) + ' ganó el juego');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Cambiar jugador
            cambiarJugador();
        };
    }
});

function cambiarJugador() {
    //siguiente jugador
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceImg.style.display = 'none';
};
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    diceImg.style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Jugador 1';
    document.getElementById('name-1').textContent = 'Jugador 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
}
document.querySelector(".btn-new").addEventListener('click', init);

/*
Nuevos retos
1. Un jugador pierde todo su puntaje si lanza dos 6 seguidos.
2. Agregar un input para que los jugadores definan el puntaje necesario para ganar.
3. Agregar un segundo dado, el jugador pierde su puntaje temporal si uno de los dos es 1.
*/
