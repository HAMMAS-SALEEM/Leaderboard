const showRanks = (player, output) => {
  output.innerHTML = '';
  player.forEach((play) => {
    output.innerHTML += `<p class="player">${play.user} : ${play.score}</p>`;
  });
};

export default showRanks;