import showRanks from "./showRanks";

const hitApi = (players,playerBox) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            players.unshift(json)
            showRanks(players, playerBox)
        });
}

export default hitApi;