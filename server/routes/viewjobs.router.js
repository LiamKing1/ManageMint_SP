const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM "Job"';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('There is an error in your GET router request', error)
      res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  const queryText = 'SELECT * FROM "Job" WHERE "id" = $1;';
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
  const newJobInput = req.body;
  const queryText = `INSERT INTO "Job" ("user_id", "jobname", "jobnum", "jobtype", "start_date", "start_time", "duration", "contactnum", "contactname", "notes")
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  pool.query(queryText, [
    newJobInput.user_id,
    newJobInput.jobname,
    newJobInput.jobnum,
    newJobInput.jobtype,
    newJobInput.start_date,
    newJobInput.start_time,
    newJobInput.duration,
    newJobInput.contactnum,
    newJobInput.contactname,
    newJobInput.notes
  ])
    .then((result) => {
      res.sendStatus(201)
      console.log('In my POST router', result.rows);
    }).catch((error) => {
      console.log('There is an error in your POST router request', error);
      res.sendStatus(500);
    })
});


router.put('/:id', (req, res) => {
  // PUT route code here
  const newJobId = req.body;
  const queryText = `
 UPDATE "Job"
 SET "user_id"=$1, "jobname"=$2, "jobnum"=$3, "jobtype"=$4, "start_date"=$5, "start_time"=$6, "duration"=$7, "contactnum"=$8, "contactname"=$9, "notes"=$10
 WHERE "id"=$11;`;
  pool.query(queryText, [
    req.user.id,
    newJobId.jobname,
    newJobId.jobnum,
    newJobId.jobtype,
    newJobId.start_date,
    newJobId.start_time,
    newJobId.duration,
    newJobId.contactnum,
    newJobId.contactname,
    newJobId.notes,
    req.params.id
  ])
    .then(() => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('There is an error in your PUT router request', error);
      res.sendStatus(500);
    })
});


router.delete('/:id', (req, res) => {
  // DELETE route code here
  const queryText = `DELETE FROM "Job" WHERE "id" = ${req.params.id};`;
  pool.query(queryText)
    .then(() => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('There is an error in your DELETE router request', error);
    })
});


module.exports = router;
