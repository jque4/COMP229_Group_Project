const { Router } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);


/* GET Route for displaying the ADD page - CREATE Operation */
router.get('/add', bookController.displayAddPage);

/* GET Route for processing the ADD page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET Route for displaying Edit page - Update Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* GET Route for processing Edit page - Update Operation */
router.post('/edit/:id', bookController.processEditPage);

/* GET to perfrom Book Deletion - Delete Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;