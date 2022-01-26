import showRanks from "./showRanks";

const refreshApiData = (players,playerBox) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            players = []
            players.push(json)
            showRanks(players, playerBox)
        });
}

export default refreshApiData;