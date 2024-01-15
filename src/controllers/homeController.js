const getHomepage = (req, res) => {
  res.send("<h1>Ngo manh thong</h1>");
};

const getAbc = (req, res) => {
  res.send("checkABC");
};

const getHome = (req, res) => {
    res.render("sample.ejs")
  };
  

module.exports = {
  getHomepage,
  getAbc,
  getHome,
};
