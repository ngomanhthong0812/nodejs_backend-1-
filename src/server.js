require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRouters = require("./router/web");

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// config template angine
configViewEngine(app);

//khai bao router
app.use("/test", webRouters);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});