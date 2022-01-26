import './index.css';
import { refreshApiData, addEntry } from './components/js/api.js';

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
});

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  await addEntry(name,score)
  console.log('test')
  refreshApiData(players, playerBox)
});