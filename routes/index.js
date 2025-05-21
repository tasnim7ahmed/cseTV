const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'IUT CSE TV' });
});

module.exports = router;