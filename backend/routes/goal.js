const express = require('express')
const router = express.Router()
const {
  getGoals,
  addGoals,
  putGoals,
  deleteGoals,
  getone
} = require("../controllers/goalContoller");

router.get('/' ,getGoals)

router.get("/:id", getone);

router.post('/post',addGoals)

router.put('/:id',putGoals)

router.delete('/:id',deleteGoals)

module.exports = router;