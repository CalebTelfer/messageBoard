const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  const data = req.body;
  messages.push({text: data.text, user: data.author, added: new Date()});
  res.redirect("/");
});

// 404 — MUST BE LAST
indexRouter.use((req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = indexRouter;