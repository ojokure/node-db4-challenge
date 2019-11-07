const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const recipeRouter = require("./Recipes/recipeRouter");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(" <h1> YO !! </>");
});

server.use("/api/recipes", recipeRouter);

module.exports = server;
