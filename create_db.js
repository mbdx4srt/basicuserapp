const {sequelize} = require('./db');
const {User} = require('./model')
function resetDB() {
    return sequelize.sync({force: true});
}

resetDB()
User.sync()