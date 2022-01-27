// import model 
import Position from '../models/PositionModel.js';


// bikin inin menjadi async 
export const getAllPosition = async(req, res) => {

    try {
        const position = await Position.findAll();
        res.json(position);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const getPositionById = async(req, res) => {

    try {
        const position = await Position.findAll({
            where: {
                id:  req.params.id
            }
        });
        res.json(position);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}


export const createPosition = async(req, res) => {

    try {
        await Position.create(req.body);
        res.json({
            'message' : 'Product created'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const updatePosition = async(req, res) => {

    try {
        await Position.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Position Updated'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const deletePosition = async(req, res) => {

    try {
        
        await Position.update({isDelete : 1}, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Position Dihapus'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}