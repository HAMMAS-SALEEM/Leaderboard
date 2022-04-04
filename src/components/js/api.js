import showRanks from './showRanks.js';

// const id = 'UrrwaUE68W5wfBNLiufe';
export const refreshApiData = (players, playerBox) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8212bddd8efba1bcda1be474798c5844/scores')
    .then((response) => response.json())
    .then((json) => {
      players = json.result;
      showRanks(players, playerBox);
    });
};

export const createGame = () => {
  const obj = {
    name: 'FIFA',
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

export const addEntry = async (name, score, msgBox) => {
  // if(name.value !== '/^[a-z0-9]+$/i' && score.value !== /^[0-9]+$/i) {
  //   msgBox.innerHTML = '
  //   Name should contain alphabets and numbers <br> Scores should contain numbers';
  //   return msgBox;
  // }
  // if (name.value !== '/^[a-z0-9]+$/i') {
  //   msgBox.innerHTML=''
  //   msgBox.innerHTML = 'Name should contain alphabets and numbers';
  //   return msgBox;
  // }
  if (score.value !== '/^[0-9]+$/i') {
    msgBox.innerHTML = '';
    msgBox.innerHTML = 'Scores should contain numbers';
    return msgBox;
  }
  const obj = {
    user: name.value,
    score: score.value,
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8212bddd8efba1bcda1be474798c5844/scores', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.result;
};