import './index.css';
import showRanks from './components/js/showRanks.js';

const playerBox = document.querySelector('.ranks');

const players = [{
  name: 'Hammas',
  score: '100',
},
{
  name: 'Jihane',
  score: '500',
},
{
  name: 'Tresor',
  score: '300',
},
];

window.addEventListener('load', () => {
  showRanks(players, playerBox);
});