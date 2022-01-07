const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const {msg, showmsg } = require("./user");

app.get("/getdata", async (req, res) => {
  const list = await showmsg();
  res.json(list);
});

app.post("/addmsg", async (req, res) => {
  const data = req.body;
  await msg(data);
  res.json({ message: "msg sent" });
});

app.listen(5000, () => console.log("this server started"));



