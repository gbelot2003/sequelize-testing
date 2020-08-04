const Sequelize = require('sequelize');

const newLocal = './models/films';
const FilmModel = require(newLocal);

const sequelize = new Sequelize('urCKqbiSJ3', 'urCKqbiSJ3', '0OJFuoifcB', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('Tabla sincronizada')
    })

    module.exports = {
        Film
    }