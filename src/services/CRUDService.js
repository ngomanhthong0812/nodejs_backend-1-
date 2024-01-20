const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};
const get_user_by_id = async (userId) => {
  let [result, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  return result;
};
const update_user_by_id = async (userId, userEmail, userName, userCity) => {
    let [result, fields] =  await connection.query(
    "UPDATE Users SET EMAIL=?, NAME=?, CITY=? WHERE ID = ? ",
    [userEmail, userName, userCity, userId]
  );
};

const delete_user_by_id = async (userId) =>{
    let [result, fields] = await connection.query(
        "DELETE FROM Users WHERE id = ?",
        [userId]
    )
}

module.exports = {
  getAllUsers,
  get_user_by_id,
  update_user_by_id,
  delete_user_by_id,
};
