import User from '../models/UserModel.js';

function getTotalSalary() {
    return User.sum('salary');

}

export const getAllSalary = async(req, res) => {
    try {
        const salary = await User.findAll(
            {attributes: ['id','username', 'fullname', 'salary']}
        );
        const totalSalary = await getTotalSalary();
        res.json({
            salary : salary,
            totalSalary : totalSalary
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const updateSalary = async(req, res) => {

    try {
        const salary = await User.update({salary : parseInt(req.body.salary)}, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message : 'Salary Updated',
            // salary : salary
        });
        console.log(req.body);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
        console.log(error);
    }

}

