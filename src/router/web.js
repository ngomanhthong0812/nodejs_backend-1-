const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getAbc,
  getHome,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getAbc);
router.get("/home", getHome);

module.exports = router;
