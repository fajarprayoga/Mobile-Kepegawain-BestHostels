import User from '../models/UserModel.js';

function getTotalSalary() {
    return User.sum('salary');

}

export const getAllSalary = async(req, res) => {
    try {
        const salary = await User.findAll(
            {attributes: ['username', 'fullname', 'salary']}
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

