import './index.css';
import refreshApiData from './components/js/api.js';

const playerBox = document.querySelector('.ranks');
const submitBtn = document.getElementById('refresh')
let players;

window.addEventListener('load', () => {
  refreshApiData(players, playerBox);
});

submitBtn.addEventListener('click',()=>{
  refreshApiData(players, playerBox);
})