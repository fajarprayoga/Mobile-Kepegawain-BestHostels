// import model 
import Product from '../models/ProductModel.js';


// bikin inin menjadi async 
export const getAllProduct = async(req, res) => {

    try {
        const products = await Product.findAll();
        res.json(products);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const getProductById = async(req, res) => {

    try {
        const product = await Product.findAll({
            where: {
                id:  req.params.id
            }
        });
        res.json(product);
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const createProduct = async(req, res) => {

    try {
        await Product.create(req.body);
        res.json({
            'message' : 'Product created'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const updateProduct = async(req, res) => {

    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Product Updated'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}

export const deleteProduct = async(req, res) => {

    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'Product Deleted'
        });
        // res.send('Welcome node js pertama anda'); 
    } catch (error) {
        res.json({massage : error.message})
    }

}