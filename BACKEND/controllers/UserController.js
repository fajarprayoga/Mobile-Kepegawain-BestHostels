// import model 
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import Position from '../models/PositionModel.js';

export const getAllUser = async(req, res) => {

    try {
        const users = await User.findAll({
            include : { //<------ By this you can use association
                model : Position ,
                // where : { id : Position.i}
            },
        });
        res.json(users);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}


export const Register = async(req, res) => {
    try {
        var message ='';

        // get data user dengan usernme sama
        const user = await User.findOne({
            where: {
                username:  req.body.username
            }
        });

        // cek username
        if(user == null){
            // created password
            const passwordHash = bcrypt.hashSync(req.body.password, 10);
            req.body.password = passwordHash;
            await User.create(req.body);
            message = 'Register Berhasil';
        }else{
            message = "Username Sudah terdaftar";
        }

        res.json({
            'message' : message
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }
    // console.log(req.body);

}

export const login = async(req, res) => {
    try {
        let message = '';
        var verified = false;
        const user = await User.findOne({
            where: {
                username:  req.body.username
            }
        });

        if(user != null){
            verified = bcrypt.compareSync(req.body.password, user.password);
            message = verified ? 'Login Sukses' : 'Password Salah';
        }else{
            message = 'Username tidak di temukan';
        }

        // response
        if(verified){
            res.json({
                code : 200,
                message : message,
                user : user
            });
        }else{
            res.json({
                code : 406,
                message : message,
            });
        }

    } catch (error) {
        res.json({code : 404,massage : error.message})
    }

    // res.json(req.body.username);
}


export const updateUser = async(req, res) => {

    try {

        var message ='';
        const passwordHash = bcrypt.hashSync(req.body.password, 10);
        req.body.password = passwordHash;
        // get data user dengan usernme sama
        const checkUsername = await User.findOne({
            where: {
                username:  req.body.username
            }
        });

        var user = await User.findOne({
            where: {
                id:  req.params.id
            }
        });

        if(checkUsername == null || user.username == req.body.username){
            var data  = await User.update(req.body, {
                where: {
                    id: req.params.id
                },
            });
            user = await User.findOne({
                where: {
                    id:  req.params.id
                }
            });
            message = 'Update Berhasil';
        }else{
            message = 'Username sudah di pakai';
        }

        res.json({
            'message' : message,
            user
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}