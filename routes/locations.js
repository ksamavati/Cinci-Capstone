const router = require('express').Router();
let Location = require('../schemas/location.model');

router.route('/').get((req, res) => {
	Location.find()
		.then(locations => res.json(locations))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;