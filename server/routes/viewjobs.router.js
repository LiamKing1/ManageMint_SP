const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
 // GET route code here
 const queryText = 'SELECT * FROM "Job"';
 pool.query(queryText)
   .then((result) => {
     console.log('In my GET router', result);
     res.send(result.rows);
   }).catch((error) => {
     alert('There is an error in your GET router request', error)
     res.sendStatus(500);
   })
});


router.post('/', (req, res) => {
 // POST route code here
 console.log('In POST REQUEST', req.body);
 const newJobInput = req.body;
 const queryText = `INSERT INTO "Job" ("user_id", "jobname", "jobnum", "jobtype", "start_date", "start_time", "duration", "contactnum", "contactname", "laborer", "supervisor", "notes")
 VALUES ('$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10', '$11', '$12');`;
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
  newJobInput.laborer,
  newJobInput.supervisor,
  newJobInput.notes
])
   .then((result) => {
    sendStatus(201);
     console.log('In my POST router', result.rows);
   }).catch((error) => {
     alert('There is an error in your POST router request', error);
     res.sendStatus(500);
   })
});


router.put('/viewjobs/:id', (req, res) => {
 // PUT route code here
 const newJobId = req.body;
 const queryText = `
 UPDATE "Job"
 SET "jobname"=$1, "jobnum"=$2, "jobtype"=$3, "start_date"=$4, "start_time"=$5, "duration"=$6, "contactnum"=$7, "contactname"=$8, "laborer"=$9, "supervisor"=$10, "notes"=$11
 WHERE "id"=$12;`;
 pool.query(queryText, [
  newJobId.user_id,
  newJobId.jobname,
  newJobId.jobnum,
  newJobId.jobtype,
  newJobId.start_date,
  newJobId.start_time,
  newJobId.duration,
  newJobId.contactnum,
  newJobId.contactname,
  newJobId.laborer,
  newJobId.supervisor,
  newJobId.notes
])
   .then(() => {
     console.log('in my PUT router');
     res.sendStatus(201);
   }).catch((error) => {
     alert('There is an error in your PUT router request', error);
     res.sendStatus(500);
   })
});


router.delete('/:id', (req, res) => {
 // DELETE route code here
 const deleteJobId = req.params.id;
 const queryText = `DELETE FROM "Job" WHERE id = $1;`;
 pool.query(queryText, [deleteJobId])
   .then(() => {
     console.log('in my PUT router');
     res.sendStatus(201);
   }).catch((error) => {
     alert('There is an error in your PUT router request', error);
   })
});


module.exports = router;
