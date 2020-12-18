// Función para borrar el id de mongo
async function getMongoIdById(id, Model) {
    const users = await Model.find();
    for (x of users)
        if (id == x.id)
            return x._id;
    return false;
}

async function getMongoIdByNicknameAndPassword(nickname, password, Model) {
    const users = await Model.find();
    for (x of users)
        if (nickname == x.nickname)
            return (password == x.password) ? x._id : false;
            
    return false;
}

async function setId(Model) {
    const users = await Model.find();
    let max = 0;
    for (x of users)
        if (x.id > max)
            max = x.id;
    return max + 1;
}


module.exports.getMongoIdById = getMongoIdById;
module.exports.getMongoIdByNicknameAndPassword = getMongoIdByNicknameAndPassword;
module.exports.setId = setId;