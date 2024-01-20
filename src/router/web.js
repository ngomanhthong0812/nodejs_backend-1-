const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getAbc,
  getCreatePage,
  getEditUser,
  getDeleteUser,
  postCreateUser,
  postEditUser,
  postDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getAbc);
router.get("/create", getCreatePage);
router.get("/edit/:id", getEditUser);
router.get("/delete/:id", getDeleteUser);


router.post("/create-user", postCreateUser);
router.post("/edit-user", postEditUser);
router.post("/delete-user", postDeleteUser);


module.exports = router;


