var express = require('express');
var router = express.Router();
var references = require('../data/lib');

router.get('/refs', function(req, res) {
	res.status(200).json(products[req.params.category]);
});

module.exports = router;
