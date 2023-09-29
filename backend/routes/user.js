const express =  require('express')
const router =  express.Router()
const {
  logUser,
  registerUser,
  logOut,
} = require("../controllers/userController");

router.post("/login", logUser);

router.post('/register',registerUser)

router.post("/logOut", logOut);

module.exports = router;