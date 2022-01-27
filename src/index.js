import './index.css';
import { refreshApiData, addEntry } from './components/js/api.js';

const playerBox = document.querySelector('.ranks');
const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const firstName = document.querySelector('.first-person')
const firstScore = document.querySelector('.first-score')
const secondName = document.querySelector('.second-person')
const secondScore = document.querySelector('.second-score')
const thirdName = document.querySelector('.third-person')
const thirdScore = document.querySelector('.third-score')
let players;

window.addEventListener('load', () => {
  refreshApiData(players, playerBox);
});

refreshBtn.addEventListener('click', () => {
  refreshApiData(players, playerBox);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addEntry(name, score);
  refreshApiData(players, playerBox);
  name.value = '';
  score.value = '';
});