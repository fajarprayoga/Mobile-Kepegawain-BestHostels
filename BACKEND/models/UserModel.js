import { Sequelize } from "sequelize";
import db from '../config/database.js';
import Position from "./PositionModel.js";

const {DataTypes} =  Sequelize; 

const User = db.define('users', {
    positionId : {
        type : DataTypes.BIGINT,
    },
    username : {
        type : DataTypes.STRING,
    },
    fullName: {
        type : DataTypes.STRING,
    },
    password: {
        type : DataTypes.STRING,
    },
    address: {
        type : DataTypes.TEXT,
    },
    phone : {
        type : DataTypes.STRING,
    },
    salary : {
        type : DataTypes.DECIMAL,
    }

    // tidak perlu menambahkan created_at atau updated at karena sudah otomatis 
}, {
    freezeTableName : true //ini agar anam db sama dengan nama ini 
});
// ini contoh ketika nama tabel foreign key tidak default
// User.belongsTo(Position, {foreignKey : 'position_id'});

// default Penulisan relasi (positionId)
User.belongsTo(Position);
// User.hasMany(Absent);

export default User;