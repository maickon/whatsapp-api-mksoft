import Sequelize from 'sequelize';

const database = new Sequelize('zapboot','root','admin', {
    host: 'localhost',
    dialect: 'mysql'
});

// const Scheduling = database.define('schedules', {
//     user_id: {
//         type: Sequelize.INTEGER
//     },
//     schedulingDate: {
//         type: Sequelize.DATETIME
//     }
// });

// Scheduling.sync({force: true});

// const User = database.define('users', {
//     name: {
//         type: sequelize.STRING
//     },
//     telephone: {
//         type: sequelize.STRING
//     }
// });

// User.sync({force: true});