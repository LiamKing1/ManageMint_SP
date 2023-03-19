const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM "safetyAd";';
  pool.query(queryText)
    .then((result) => {
      console.log('In my GET router', result);
      res.send(result.rows);
    }).catch((error) => {
      alert('There is an error in your GET router request', error)
      res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  const queryText = 'SELECT * FROM "safetyAd" WHERE "id" = $1;';
  pool.query(queryText, [id])
    .then((result) => {
      res.send(result.rows[0]);
    }).catch((error) => {
      console.log('There is an error in your GET router request', error)
      res.sendStatus(500);
    })
});


router.post('/', (req, res) => {
  // POST route code here
  const newSafetyAd = req.params.id;
  console.log('CHECKING WHAT MY PARAMS READ', req.params.id);
  const queryText = `INSERT INTO "safetyAd" ("advisory")
 VALUES ('$1');`;
  pool.query(queryText, [newSafetyAd.advisory])
    .then(() => {
      console.log('In my POST router');
    }).catch((error) => {
      console.log('There is an error in your POST router request', error);
      res.sendStatus(500);
    })
});


router.put('/:id', (req, res) => {
  // PUT route code here
  const newSafetyAlert = req.body;
  const queryText = `
 UPDATE "safetyAd"
 SET "advisory"=$1
 WHERE "id"=$2;`;
  // const newJob;
  pool.query(queryText,
    [
      newSafetyAlert.advisory,
      req.params.id
    ])
    .then(() => {
      console.log('in my PUT router');
      res.sendStatus(200);
    }).catch((error) => {
      console.log('There is an error in your PUT router request', error);
    })
});


router.delete('/:id', (req, res) => {
  // DELETE route code here
  const deleteAdvisoryId = req.params.id;
  const queryText = `DELETE FROM "safetyAd" WHERE id = $1;`;
  pool.query(queryText, [deleteAdvisoryId])
    .then(() => {
      console.log('in my PUT router');
      res.sendStatus(200);
    }).catch((error) => {
      console.log('There is an error in your PUT router request', error);
    })
});


module.exports = router;
