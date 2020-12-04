// Función para borrar el id de mongo
async function getMongoIdById(id, Model) {
    const users = await Model.find();
    for (x of users)
        if (id == x.id)
            return x._id;
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
module.exports.setId = setId;