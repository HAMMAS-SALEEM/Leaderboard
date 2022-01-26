import showRanks from "./showRanks";
const id = 'UrrwaUE68W5wfBNLiufe'
export const refreshApiData = (players, playerBox) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UrrwaUE68W5wfBNLiufe/scores')
        .then(response => response.json())
        .then(json => {
            players = json.result;
            console.log(players)
            showRanks(players, playerBox)
        });
}

export const createGame = () => {
    let obj = {
        name: "FIFA",
    }
    console.log(JSON.stringify(obj))
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export const addEntry = async (name, score) => {
    let obj = {
        user: name.value,
        score: score.value,
    }
    console.log(JSON.stringify(obj))
   let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UrrwaUE68W5wfBNLiufe/scores', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        console.log('testA')
        
        await response.json()

        console.log("testB")
}