const showRanks = (player, output) => {
  output.innerHTML = ``
  player.forEach((play) => {
    output.innerHTML += `<p class="player">${play.title} : ${play.id}</p>`;
  });
};

export default showRanks;