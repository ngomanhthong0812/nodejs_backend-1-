const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getAbc,
  getHome,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getAbc);
router.get("/home", getHome);

router.post("/create-user", postCreateUser);

module.exports = router;


