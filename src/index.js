import './index.css';
import refreshApiData from './components/js/api.js';

const playerBox = document.querySelector('.ranks');
const refreshBtn = document.getElementById('refresh')
const form = document.getElementById('form')
const name = document.getElementById('name')
const score = document.getElementById('score')
let players;

window.addEventListener('load', () => {
  refreshApiData(players, playerBox);
});

refreshBtn.addEventListener('click',()=>{
  refreshApiData(players, playerBox);
})

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let obj = {
    name: name.value,
    score: score.value,
    id: new Date().getTime().toString()
  }
  console.log(JSON.stringify(obj))
})