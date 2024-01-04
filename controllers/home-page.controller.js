const { friends } = require("../models/friends.model")

const homePageParameters = {
  title: "Node js course",
  caption: "Hello from Node!",
  friendsList: friends,
}

function renderHomePage(req, res) {
  res.render("index", homePageParameters)
}

module.exports = {
  renderHomePage
}
