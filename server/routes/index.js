var express = require('express');
var router = express.Router();
var references = require('../data/lib');

router.get('/', function(req, res) {
	res.render(req.url, {
		title: 'All categories',
		categories: references
	});
});

module.exports = router;
