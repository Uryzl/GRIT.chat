require("dotenv").config();

const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY}}
    );
    // Status and data within the API call
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);