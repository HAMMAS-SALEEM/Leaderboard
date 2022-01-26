import './index.css';
import hitApi from './components/js/api.js';

const playerBox = document.querySelector('.ranks');
const submitBtn = document.getElementById('refresh')
let players = [];

window.addEventListener('load', () => {
  hitApi(players, playerBox);
});

submitBtn.addEventListener('click',()=>{
  hitApi(players, playerBox);
})