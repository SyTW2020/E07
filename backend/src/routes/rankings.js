const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.send('Aquí irán los rankings');
});

module.exports = router;