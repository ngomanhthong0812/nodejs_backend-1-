const connection = require("../config/database");
const { post } = require("../router/web");
const {
  getAllUsers,
  get_user_by_id,
  update_user_by_id,
  delete_user_by_id,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  return res.render("home.ejs", { listUsers: result });
};

const getAbc = (req, res) => {
  res.send("checkABC");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // connection.query(
  //   `INSERT INTO Users (EMAIL, NAME, CITY)
  //   VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("Create user succeed!");
  //   }
  // );
  let [results, fields] = await connection.query(
    `INSERT INTO Users (EMAIL, NAME, CITY) VALUES (?,?,?)`,
    [email, name, city]
  );

  console.log(">>> check result", results);
  res.redirect("/")
};

const getEditUser = async (req, res) => {
  // req.body để lấy dữ liệu post
  // req.params để lấy dữ liệu get
  let userId = req.params.id;
  const result = await get_user_by_id(userId);
  let user = result && result.length > 0 ? result[0] : {};
  res.render("edit.ejs", { userData: user });
};
const getDeleteUser = async (req, res) => {
  // req.body để lấy dữ liệu post
  // req.params để lấy dữ liệu get
  let userId = req.params.id;
  const result = await get_user_by_id(userId);
  let user = result && result.length > 0 ? result[0] : {};
  res.render("delete.ejs", { userData: user });
};

const postEditUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await update_user_by_id(id, email, name, city);

  //redirect có tác dụng chuyển hướng(như header() bên php)
  res.redirect("/");
};
const postDeleteUser = async (req,res) =>{
  let id = req.body.id;

  await delete_user_by_id(id);
  res.redirect("/")
}

module.exports = {
  getHomepage,
  getAbc,
  getCreatePage,
  getEditUser,
  getDeleteUser,
  postCreateUser,
  postEditUser,
  postDeleteUser,
};
