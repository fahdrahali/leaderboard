import Score from './score.js';
import { addNewScoreService, getAllScoresService } from './scoreServices.js';

const updateList = async () => {
  const btnRefresh = document.getElementById('btn-refresh');
  const container = document.getElementById('score-list');
  btnRefresh.addEventListener('click', async () => {
    const scores = await getAllScoresService()
      .then((result) => result);
    container.innerHTML = '';
    scores.result.forEach((el) => {
      container.innerHTML += `<li>${el.user}: ${el.score}</li>`;
    });
  });
};

const addScore = () => {
  const form = document.querySelector('.form-score');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { user, score } = form.elements;
    const newScore = new Score(user.value, score.value);
    await addNewScoreService(newScore);
    user.value = '';
    score.value = '';
  });
};

export { updateList, addScore };