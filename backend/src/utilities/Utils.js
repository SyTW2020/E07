// Función para borrar el id de mongo
async function getMongoIdById(id, User) {
    const users = await User.find();
    for (x of users) 
        if (id == x.id)
            return x._id;
    console.log('no hay return')
}

async function setId(User) {
    const users = await User.find();
    let max = 0;
    for (x of users) 
        if (x.id > max)
            max = x.id;
    return max + 1;
}

module.exports.getMongoIdById = getMongoIdById;
module.exports.setId = setId;