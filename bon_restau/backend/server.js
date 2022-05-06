require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");
connectDB();

const app = express();

/*
//test 
app.use(cors())
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {

    res.send("Api is running");
})
//Fin test
*/

app.use(express.json());

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));