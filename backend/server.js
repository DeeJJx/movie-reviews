//pull hidden data from env file
require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const movieRoutes = require('./routes/movies');
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/movies', movieRoutes);



//connect to DB THEN listen on port
mongoose.connect(process.env.DBURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on DB and connected to ', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })