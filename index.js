import express from "express";
import mongoose from 'mongoose';
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;

// PUT YOUR CONNECTION STRING HERE
const DB_URL = ''

const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}));

app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {
            console.log('SERVER WAS STARTED ON PORT ' + PORT)
        });
    } catch (err) {
        console.error(err);
    }
};

startApp();