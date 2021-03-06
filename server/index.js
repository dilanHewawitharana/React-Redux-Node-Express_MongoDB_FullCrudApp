import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
// dotenv.config();

app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello to Memories API');
// });

process.env.CONNECTION_URL = 'mongodb+srv://databaseuser:12341234@cluster0.npy6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
process.env.PORT = 5000

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useFindAndModify: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

console.log('work here 06 :' + process.env.CONNECTION_URL + ' : ' + PORT);

mongoose.set('useFindAndModify', false);







