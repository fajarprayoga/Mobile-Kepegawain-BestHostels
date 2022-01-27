import { Sequelize } from "sequelize";
import db from '../config/database.js';

const {DataTypes} =  Sequelize; 

const Product = db.define('products', 
    {
        title : {
            type : DataTypes.STRING,
        },
        price : {
            type : DataTypes.DOUBLE,
        }
        // tidak perlu menambahkan created_at atau updated at karena sudah otomatis 
    }, {
        freezeTableName : true //ini agar anam db sama dengan nama ini 
    }
);


export default Product;