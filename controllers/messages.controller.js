const path = require("path");
function getMessages(req, res) {
  // res.send("<ul><li>Hello Ali</li></ul>");
  const imagePath = path.join(__dirname, "..", "public", "images", "skimountain.jpg");
  res.sendFile(imagePath);
}

function postMessages(req, res) {
  console.log("New message received");
}

module.exports = {
  getMessages,
  postMessages
}