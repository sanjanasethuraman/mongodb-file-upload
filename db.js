/* const mongoose = require('mongoose');
require('dotenv').config();
 */
import mongoose from "mongoose";
import {} from "dotenv/config";


//This code if for ES Module. Change it if you want
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    }
);

//for some reason the above connection check doesn't work. Use this one instead
const connection= mongoose.connection;
connection.once('open', () => {
    console.log("mongodb connection");
})
connection.on('error', console.error.bind(console, 'connection error:'));