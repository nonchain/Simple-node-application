const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const homePageRouter = require("./routes/home-page.router");

const app = express();
const PORT = 3001;
const indexHTMLPath = path.join(__dirname, "public");
const serverViewsFilePath = path.join(__dirname, "views");

app.set("view engine", "hbs");
app.set("views", serverViewsFilePath);

app.use((req, res, next) => {
  const start = Date.now();

  next(); // go to the one of the route handler functions

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/", express.static(indexHTMLPath));
app.use(express.json());

app.use("/", homePageRouter);
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
