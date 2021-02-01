async function isUser(nickname, Model) {
  const user = await Model.find({ "nickname": nickname });
  return user.length != 0 ? user[0] : false;
}
 
async function rankingsOfUser(nickname, Model) {
  // Los resultados se ordenan de mayor a menos puntuación, y de más reciente a más antiguo
  const ranking = await Model.find({ "nickname": nickname }).sort({ "score": -1, "time": 1 });
  return ranking.length != 0 ? ranking : false;
}

async function rankingsOfGame(game, Model) {
  // Los resultados se ordenan de mayor a menos puntuación, y de más reciente a más antiguo
  const ranking = await Model.find({ "game": game }).sort({ "score": -1, "time": 1 });
  return ranking.length != 0 ? ranking : false;
}

async function isGame(name, Model) {
  const game = await Model.find({ "name": name });
  return game.length != 0 ? game[0] : false;
}

module.exports = {
  isUser,
  rankingsOfUser,
  rankingsOfGame,
  isGame
};