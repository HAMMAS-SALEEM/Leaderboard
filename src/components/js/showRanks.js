const showRanks = (player, output) => {
  player.forEach((play) => {
    output.innerHTML += `<p class="player">${play.name} : ${play.score}</p>`;
  });
};

export default showRanks;