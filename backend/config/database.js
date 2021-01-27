// const fs = require('fs');
// const file = `/home/usuario/.deployment.env`;

// const deploymentEnv = fs.readFileSync(file, 'utf8');
// let lines = deploymentEnv.split('\n');
// for (var line of lines) {
//   let splited = line.split(' = ');
//   process.env[splited[0]] = splited[1].replace(/\"/g, "");
// }

// const databaseHost = process.env.DATABASE_HOST;
// const databasePort = process.env.DATABASE_PORT;
// const databaseUser = process.env.DATABASE_USER;
// const databasePassword = process.env.DATABASE_PASSWORD;
// const databaseName = process.env.DATABASE_NAME;
// const databaseConnectionOpts = process.env.DATABASE_CONNECTION_OPTIONS;

module.exports = {
  // remoteUrl: 'mongodb+srv://admin:admin@cluster0.mmzwj.mongodb.net/Cluster0?retryWrites=true&w=majority',
  remoteUrl: `mongodb://AdminGamingIt:admin@172.16.134.1:27017/gamingit?`,
  localUrl: 'mongodb://localhost/gamingit'
};
