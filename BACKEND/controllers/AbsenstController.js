// import model 
import Absent from '../models/AbsentModel.js';
import moment from 'moment-timezone';
import User from '../models/UserModel.js';
var nDate = moment().tz("Asia/Ujung_Pandang").format('YYYY-MM-DD H:m:s');

// bikin inin menjadi async 
export const getAllAbsent = async(req, res) => {

    try {
        const absent = await Absent.findAll({
            include:User
        });
        res.json(absent);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const getAbsentById = async(req, res) => {

    try {
        req.body.createdAt = nDate;
        const absent = await Absent.findAll({
            where: {
                id:  req.params.id
            }
        });
        res.json(absent);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const createAbsent = async(req, res) => {

    try {
        // req.body.createdAt = nDate;
        const data = {
            usersId : req.body.usersId,
            status : req.body.status,
            date : nDate
        }
        await Absent.create(data);
        res.json({
            'message' : 'Absent created'
        });
        console.log('waktu ',data);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const updateAbsent = async(req, res) => {

    try {
        await Absent.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Absent Updated'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

