require("dotenv").config();

const productData =  require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

//importe les donnees dans la base
const importData = async () => {
    try {
        await Product.deleteMany({});

        //await Product.insertMany(productData);
        await Product.insertMany(productData[0]); //entrees
        await Product.insertMany(productData[1]); //plats
        await Product.insertMany(productData[2]); //desserts


        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        console.log(error);
        process.exit(1);
    }
};

importData();