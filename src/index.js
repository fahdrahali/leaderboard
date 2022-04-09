import { addScore, updateList } from '../modules/handleScore.js';
import { getAllScoresService } from '../modules/scoreServices.js';
import './style.css';

const render = async () => {
  const container = document.getElementById('score-list');
  const scores = await getAllScoresService()
    .then((result) => result);
  scores.result.forEach((el) => {
    container.innerHTML += `<li>${el.user}: ${el.score}</li>`;
  });
};

render();
updateList();
addScore();