const homePageParameters = {
  title: "Node js course",
  caption: "Hello from Node!"
}

function renderHomePage(req, res) {
  res.render("index", homePageParameters)
}

module.exports = {
  renderHomePage
}
