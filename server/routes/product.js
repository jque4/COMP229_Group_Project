const { Router } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Product = require('../models/product');

let productController = require('../controllers/product');

/* GET Route for the Book List page - READ Operation */
router.get('/', productController.displayProductList);


/* GET Route for displaying the ADD page - CREATE Operation */
router.get('/add', productController.displayAddPage);

/* GET Route for processing the ADD page - CREATE Operation */
router.post('/add', productController.processAddPage);

/* GET Route for displaying Edit page - Update Operation */
router.get('/edit/:id', productController.displayEditPage);

/* GET Route for processing Edit page - Update Operation */
router.post('/edit/:id', productController.processEditPage);

/* GET to perfrom product Deletion - Delete Operation */
router.get('/delete/:id', productController.performDelete);

module.exports = router;