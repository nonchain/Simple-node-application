const { friends } = require("../models/friends.model");

function getFriends(req, res) {
  res.send(friends);
}

function getFriend(req, res) {
  const friendId = req.params.friendId;
  const friend = friends[friendId - 1];
  if (!friend)
    return res.status(404).json({
      error: `user with id ${friendId} not found`,
    });
  res.send(friend);
}

function postFriend(req, res) {
  if (!req.body.name)
    return res.status(400).json({
      error: "Missing name value",
    });
  const newFriend = {
    name: req.body.name,
    id: friends.length + 1,
  };

  friends.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
