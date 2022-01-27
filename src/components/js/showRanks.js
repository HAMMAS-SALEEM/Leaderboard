const showRanks = (player, output) => {
  const apiData = player.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  output.innerHTML = '';
  apiData.forEach((play, index) => {
    if (index === 0) {
      document.querySelector('.first-person').innerHTML = `${play.user}`;
      document.querySelector('.first-score').innerHTML = `${play.score}`;
    } else if (index === 1) {
      document.querySelector('.second-person').innerHTML = `${play.user}`;
      document.querySelector('.second-score').innerHTML = `${play.score}`;
    } else if (index === 2) {
      document.querySelector('.third-person').innerHTML = `${play.user}`;
      document.querySelector('.third-score').innerHTML = `${play.score}`;
    } else if (index > 2 && index < 10) { output.innerHTML += `<p class="player">${play.user} : ${play.score}</p>`; }
  });
};

export default showRanks;