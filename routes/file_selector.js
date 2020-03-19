var express = require('express');
var router = express.Router();
const main = require('../scripts/main');

router.get('/selector/:paths', async (req, res) => {
    let list = await main.fs.dir(req.params.paths);
    res.send(list);
});

router.get('/selector', async (req, res) => {
    let list = await main.fs.dir();
    res.send(list);
});

module.exports = router;