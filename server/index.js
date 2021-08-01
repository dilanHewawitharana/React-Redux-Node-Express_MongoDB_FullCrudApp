import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

console.log('work here 01');

const app = express();
dotenv.config();

console.log('work here 02');

app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

console.log('work here 03');

app.use('/posts', postRoutes);

console.log('work here 04');

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

console.log('work here 05');

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useFindAndModify: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

console.log('work here 06');

mongoose.set('useFindAndModify', false);







