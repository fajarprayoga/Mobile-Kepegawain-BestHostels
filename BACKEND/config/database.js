import { Sequelize } from "sequelize";

const db = new Sequelize('besthostels', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

export default db;