require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRouters = require("./router/web");
const connection = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;


//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); // for from data
// config template angine
configViewEngine(app);

//khai bao router
app.use("/", webRouters);



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
