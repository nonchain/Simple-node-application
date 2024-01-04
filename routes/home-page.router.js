const express = require("express");
const { renderHomePage } = require("../controllers/home-page.controller");

const homePageRouter = express.Router();

homePageRouter.get("/", renderHomePage);

module.exports = homePageRouter;