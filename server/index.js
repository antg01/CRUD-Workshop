const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const db = require("./config.js");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM movie"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

app.post('/api/insert', (req,res) => {

    const movieName = req.body.movieName
    const movieDate = req.body.movieDate
    const movieLength = req.body.movieLength
    const movieRecommend = req.body.movieRecommend

    const sqlInsert = "INSERT INTO movie (movieName, movieDate, movieLength, movieRecommend) VALUES (?,?,?,?) ; "
    db.query(sqlInsert, [movieName, movieDate, movieLength, movieRecommend], (err, result) => {
        console.log(result)
        console.log(err)
    })
});

app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM movie WHERE movieName=?";

    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    });
});

app.listen(3003, () => {
    console.log('run on port 3003')
})