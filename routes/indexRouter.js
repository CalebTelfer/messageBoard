const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2
  }
];

indexRouter.get("/", (req, res) => res.render("index"));

indexRouter.get("/messages", (req, res) => {
  const msgID = req.query.id;

  if (msgID) {
    const singleMessage = messages.filter(msg => msg.id == msgID);
    return res.render("messages", {messages: singleMessage});
  }

  res.render("messages", { messages: messages });
});

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  const data = req.body;
  const msgID = messages.length + 1;
  messages.push({text: data.text, user: data.author, added: new Date(), id: msgID});
  res.redirect("/");
});

// 404 — MUST BE LAST
indexRouter.use((req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = indexRouter;