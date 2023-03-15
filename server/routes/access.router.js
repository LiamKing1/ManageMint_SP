const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // what is the value of req.user????
    console.log('req.user:', req.user);
    const properClearance = req.user.title_id;
    const queryText = `SELECT * FROM "user"
    WHERE "title_id"" >=$1
    ORDER BY "id";`
    pool.query(queryText, [properClearance]
      ).then((results) => {
        res.send(results.rows)
      }
      ).catch((error) => {
        console.log('Error making SELECT for secrets:', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;