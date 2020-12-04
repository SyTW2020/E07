const databaseHost = '172.16.134.1';
const databasePort = '27017';
const databaseUser = 'AdminGamingIt';
const databasePassword = 'admin';
const databaseName = 'gamingit';
const databaseConnectionOpts = '';

module.exports = {
    remoteUrl: `mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`,
    localUrl: 'mongodb://localhost/gamingit'
};