const express = require("express");
const { getFriends, postFriend, getFriend } = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("User IP address", req.ip);
  next()
})

friendsRouter.get("/", getFriends);
friendsRouter.post("/", postFriend);
friendsRouter.get("/:friendId", getFriend);


module.exports = friendsRouter;