import { Sequelize } from "sequelize";
import db from '../config/database.js';

const {DataTypes} =  Sequelize; 

const Position = db.define('position', 
    {
        name : {
            type : DataTypes.STRING,
        },
        isDelete : {
            type : DataTypes.TINYINT,
        }
    // tidak perlu menambahkan created_at atau updated at karena sudah otomatis 
    }, {
        freezeTableName : true //ini agar anam db sama dengan nama ini 
    }
);


export default Position;