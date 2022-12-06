const { connect, connection } = require('mongoose')

const connectionString = process.env.CONN;

console.log(connectionString)
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;