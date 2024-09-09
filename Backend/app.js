const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const productRouters = require('./routers/product')
const userRouters = require('./routers/user')

require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', process.env.ACCESS_CONTROL_ALLOW_METHODS);
    res.setHeader('Access-Control-Allow-Headers', process.env.ACCESS_CONTROL_ALLOW_HEADERS);
    next();
})


app.use('/product', productRouters)
app.use('/user', userRouters)


const PORT = process.env.PORT || 8080

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => {
            console.log('Server is running on ' + PORT);
        });
    } catch (err) {
        console.log(err);
    }
};

connectToDatabase();