const showRanks = (player, output) => {
  let apiData = player.sort((a,b)=>parseFloat(b.score)-parseFloat(a.score))
  output.innerHTML = '';
  apiData.forEach((play,index) => {
    if(index > 2 && index<10)
    output.innerHTML += `<p class="player">${play.user} : ${play.score}</p>`;
  });
};

export default showRanks;