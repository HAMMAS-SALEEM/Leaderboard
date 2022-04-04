import showRanks from './showRanks.js';

// const id = 'UrrwaUE68W5wfBNLiufe';
export const refreshApiData = (players, playerBox) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a9b9cdf78dfb964d4ad19ba5e0292907;o=1/scores')
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

export const addEntry = async (name, score) => {
  const obj = {
    user: name.value,
    score: score.value,
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a9b9cdf78dfb964d4ad19ba5e0292907;o=1/scores', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.result;
};