exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isAuthenticated = true;

  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
  });
};
