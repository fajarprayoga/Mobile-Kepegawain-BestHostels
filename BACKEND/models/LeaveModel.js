import { Sequelize } from "sequelize";
import db from '../config/database.js';
import User from "./UserModel.js";

const {DataTypes} =  Sequelize; 

const Leave = db.define('leave', 
    {
        userId : {
            type : DataTypes.BIGINT,
        },
        fromDate : {
            type : DataTypes.DATEONLY                    
        },
        untilDate : {
            type : DataTypes.DATEONLY                      
        },
        description : {
            type : DataTypes.TEXT            
        },
        status : {
            type : DataTypes.ENUM('pending', 'rejected', 'approved'),
        }
        
        // tidak perlu menambahkan created_at atau updated at karena sudah otomatis 
    }, 
    {
        timestamps: false,
        paranoid: false,
        freezeTableName : true //ini agar anam db sama dengan nama ini 
    }
);
Leave.belongsTo(User);

export default Leave;