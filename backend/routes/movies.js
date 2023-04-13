const express = require('express');
const {
    createMovie,
    getAllMovies,
    getMovie,
    deleteMovie,
    updateMovie
} = require('../controllers/moviesControllers')

const router = express.Router();

//get all movies

router.get('/', getAllMovies);

// get a single movie

router.get('/:id', getMovie);

// post a new movie
router.post('/', createMovie);

// router.post('/', (req,res) => {
//     res.json({msg: 'post a single movie'})
// })

//update an existing movie
router.patch('/:id', updateMovie);

//delete a movie
router.delete('/:id', deleteMovie);


module.exports = router; 