// import model 
import Absent from '../models/AbsentModel.js';
import moment from 'moment-timezone';
import User from '../models/UserModel.js';
import Leave from '../models/LeaveModel.js';
var nDate = moment().tz("Asia/Ujung_Pandang").format('YYYY-MM-DD');

// bikin inin menjadi async 
export const getAllLeave = async(req, res) => {

    try {
        const leave = await Leave.findAll({
            include:User
        });
        res.json({
            code : 200,
            leave : leave
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const getLeaveById = async(req, res) => {

    try {
        req.body.createdAt = nDate;
        const leave = await Leave.findAll({
            where: {
                id:  req.params.id
            }
        });
        res.json(leave);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const createLeave = async(req, res) => {

    try {
        // req.body.createdAt = nDate;
        await Leave.create(req.body);
        const leave = await Leave.findAll({
            include:User
        });
        res.json({
            'message' : 'Leave created',
            'leave' : leave
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const updateLeave = async(req, res) => {

    try {
        await Leave.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Leave Updated'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }
}

