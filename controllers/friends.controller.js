const { friends } = require("../models/friends.model");

const friendsPageParameters = {
  title: "Friends List",
};

function getFriends(req, res) {
  res.render("friends", friendsPageParameters);
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
  console.log(req.body);
  if (!req.body.name)
    return res.status(400).json({
      error: "Missing name value",
    });

  const newFriend = {
    id: friends.length + 1,
    name: req.body.name,
  };

  friends.push(newFriend);
  console.log(friends);

  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
