// Función para borrar el id de mongo
// async function getMongoIdById(nickname, Model) {
//   const users = await Model.find();
//   for (x of users)
//     if (nickname == x.nickname)
//       return x._id;
//   return false;
// }

// async function getUser(nickname, password, Model) {
//   const user = await Model.find({ "nickname": nickname, "password": password });
//   return user.length == 1 ? user[0] : null;
// }

async function isUser(nickname, Model) {
  const user = await Model.find({ "nickname": nickname });
  return user.length != 0 ? user[0] : false;
}
 
async function rankingsOfUser(nickname, Model) {
  const ranking = await Model.find({ "nickname": nickname });
  return ranking.length != 0 ? ranking : false;
}

async function rankingsOfGame(game, Model) {
  const ranking = await Model.find({ "game": game });
  return ranking.length != 0 ? ranking : false;
}

// async function setId(Model) {
//   const users = await Model.find();
//   let max = 0;
//   for (x of users)
//     if (x.id > max)
//       max = x.id;
//   return max + 1;
// }

module.exports = {
  isUser,
  rankingsOfUser,
  rankingsOfGame
};

// module.exports.isUser = isUser;
// module.exports.rankingsOfUser = rankingsOfUser;