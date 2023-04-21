import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express(); //creating our express server
dotenv.config();

app.use(express.json({limit:"30mb", extended : true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors()) //cors is used to prevent web pages from making requests to a different domain than the one that served the web page.

app.get('/', (req, res) => {  //if app receives this get request with root path as '/'
   res.send('This is a StackOverflow clone API')
});

app.use('/user', userRoutes); //userRoutes here acts as a middleware
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);

const PORT = process.env.PORT || 5000; //checks for available port and if there's none then PORT 5000 will be used

const DATABASE_URL = process.env.CONNECTION_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))