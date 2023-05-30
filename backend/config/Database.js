import { Sequelize } from "sequelize";

const db = new Sequelize('db_auth', 'root', 'imroot', {
    host: "localhost",
    dialect: "mariadb"
});

export default db;