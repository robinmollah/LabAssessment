var express = require('express');
var router = express.Router();
const main = require('../scripts/main');

router.get('/selector/:paths', async (req, res) => {
    let path = req.params.paths;
    let list = await main.fs.dir(req.params.paths);
    console.log(list);
    res.send({cwd: path, list: list});
});

router.get('/selector', async (req, res) => {
    let list = await main.fs.dir();
    res.send({cwd: require('os').homedir(), list: list});
});

module.exports = router;