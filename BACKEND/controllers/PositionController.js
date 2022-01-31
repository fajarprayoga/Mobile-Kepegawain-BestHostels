// import model 
import Position from '../models/PositionModel.js';


// bikin inin menjadi async 
export const getAllPosition = async(req, res) => {

    try {
        const position = await Position.findAll({
            where: {
                isDelete:  0
            }
        });
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
        const position = await Position.findAll({
            where: {
                isDelete:  0
            }
        });
        res.json({
            'message' : 'Product created',
            'position' : position
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
        const position = await Position.findAll({
            where: {
                isDelete:  0
            }
        });
        res.json({
            'message' : 'Position Updated',
            'position' : position
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
        const position = await Position.findAll({
            where: {
                isDelete:  0
            }
        });
        res.json({
            'message' : 'Position Dihapus',
            'position' : position
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}