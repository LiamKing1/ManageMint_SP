const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
 // GET route code here
 const queryText = 'SELECT * FROM "Job";';
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
 const newJobInput = req.body;
 const queryText = `INSERT INTO "Job" ("user_id", "jobname", "jobnum", "jobtype", "start_date", "start_time", "duration", "contactnum", "contactname", "laborer", "supervisor", "notes")
 VALUES ('$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10', '$11', '$12');`;
 pool.query(queryText, [newJobInput.user_id, newJobInput.jobname, newJobInput.jobnum, newJobInput.jobtype, newJobInput.start_date, newJobInput.start_time, newJobInput.duration, newJobInput.contactnum, newJobInput.contactname, newJobInput.laborer, newJobInput.supervisor, newJobInput.notes])
   .then(() => {
     console.log('In my POST router');
   }).catch((error) => {
     alert('There is an error in your POST router request', error);
     res.sendStatus(500);
   })
});


router.put('/:id', (req, res) => {
 // PUT route code here
 const queryText = ``;
 const newJobId = req.params.id;
 const newJobType = req.params.jobtype;
 // const newJob;
 pool.query(queryText, [])
   .then(() => {
     console.log('in my PUT router');
     res.sendStatus(200);
   }).catch((error) => {
     alert('There is an error in your PUT router request', error);
   })
});


router.delete('/:id', (req, res) => {
 // DELETE route code here
 const deleteJobId = req.params.id;
 const queryText = `DELETE FROM "Job" WHERE id = $1;`;
 pool.query(queryText, [deleteJobId])
   .then(() => {
     console.log('in my PUT router');
     res.sendStatus(200);
   }).catch((error) => {
     alert('There is an error in your PUT router request', error);
   })
});


module.exports = router;
