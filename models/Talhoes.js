import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";
import Propriedades from "./Propriedades.js";

const Talhoes = connection.define('talhoes', {
    id_talhao: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false,
    },
    especie_fruta: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

Talhoes.sync({ force: false });

export default Talhoes;
