const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getAbc = (req, res) => {
  res.send("checkABC");
};

const getHome = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  connection.query(
    `INSERT INTO Users (EMAIL, NAME, CITY) 
    VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      res.send("Create user succeed!");
    }
  );
};

module.exports = {
  getHomepage,
  getAbc,
  getHome,
  postCreateUser,
};
