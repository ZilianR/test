exports.home = (req, res) => {
    const title = "Hello World",
      subTitle = "Welcome to jungle";
  
    res.render("index", { title, subTitle });
  };