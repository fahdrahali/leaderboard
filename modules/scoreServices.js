const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/V4DKbFqBokLuYEnFokoJ/scores';

const getAllScoresService = async () => {
  const result = await fetch(apiUrl)
    .then((result) => result.json())
    .then((data) => data);
  return result;
};

const addNewScoreService = async (data) => {
  const score = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return score.json();
};

export { getAllScoresService, addNewScoreService };