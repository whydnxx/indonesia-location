const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
  res.json({ title: 'Location API' });
});

router.get('/province', function (req, res, next) {
  fs.readFile('./data/provinces.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

router.get('/city/:id', function (req, res, next) {
  fs.readFile(`./data/cities/${req.params.id}.json`, 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

router.get('/district/:id', function (req, res, next) {
  fs.readFile(`./data/districts/${req.params.id}.json`, 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

router.get('/village/:id', function (req, res, next) {
  fs.readFile(`./data/villages/${req.params.id}.json`, 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

module.exports = router;
