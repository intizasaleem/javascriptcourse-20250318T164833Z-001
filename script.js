function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceResult').textContent = `You rolled a ${dice}!`;
}