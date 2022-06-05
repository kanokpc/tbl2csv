import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const  CONNECTION_URL = 'mongodb://kanokpc:dod170678@cluster0-shard-00-00.w3avv.mongodb.net:27017,cluster0-shard-00-01.w3avv.mongodb.net:27017,cluster0-shard-00-02.w3avv.mongodb.net:27017/?ssl=true&replicaSet=atlas-f9u092-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// https://www.mongodb.com/cloud/atlas