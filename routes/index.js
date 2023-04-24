import express from "express";
import { aggregate } from "../controller/aggregate.js";
import { find } from "../controller/find.js";
import { insert } from "../controller/insert.js";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/insert',insert)
// router.get('/:id',find)
router.get('/:des',aggregate)
export default router