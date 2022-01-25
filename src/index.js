import './index.css'

const playerBox = document.querySelector('.ranks')

let player = [{
        name: 'Hammas',
        score: '100'
    },
    {
        name: 'Jihane',
        score: '500'
    },
    {
        name: 'Tresor',
        score: '300'
    }
]

player.forEach(play=>{
   playerBox.innerHTML+=`<p class="player">${play.name} : ${play.score}</p>` 
})