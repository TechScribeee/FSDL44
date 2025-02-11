function playGame() {
    // Get player numbers and bets
    const player1Number = parseInt(document.getElementById('player1Number').value);
    const player2Number = parseInt(document.getElementById('player2Number').value);
    const player3Number = parseInt(document.getElementById('player3Number').value);

    const player1Bet = parseInt(document.getElementById('player1Bet').value);
    const player2Bet = parseInt(document.getElementById('player2Bet').value);
    const player3Bet = parseInt(document.getElementById('player3Bet').value);

    // Generate a random winning number (0 to 36)
    const winningNumber = Math.floor(Math.random() * 6);
    
    // Animate the ball
    const ball = document.querySelector('.ball');
    const wheel = document.querySelector('.roulette-wheel');

    // Simulate wheel rotation
    const rotation = Math.floor(Math.random() * 360 + 3600); // random rotation angle
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    // Wait for the animation to complete before displaying results
    setTimeout(() => {
        // Calculate the total pot
        const totalPot = player1Bet + player2Bet + player3Bet;
        
        // Determine the winner
        let winner = "No winner";

        if (player1Number === winningNumber) {
            winner = "Player 1 wins!";
        } else if (player2Number === winningNumber) {
            winner = "Player 2 wins!";
        } else if (player3Number === winningNumber) {
            winner = "Player 3 wins!";
        }

        // Display the results
        document.getElementById('winningNumber').textContent = `Winning Number: ${winningNumber}`;
        document.getElementById('winner').textContent = winner;
        document.getElementById('totalPot').textContent = `Total Pot: ${totalPot}`;

        // Reset ball position for next spin
        ball.style.transition = 'none';
        ball.style.transform = `translate(-50%, -50%)`; // Reset position
    }, 4000); // Same time as the transition (4 seconds)
}
