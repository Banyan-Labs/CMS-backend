require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors());

const studiesRouter = require('./routes/caseStudies')
app.use('/cases', studiesRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)


app.listen(8080, () => console.log('Server Started'))