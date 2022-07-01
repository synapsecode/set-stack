const express = require("express");
const cors = require('cors');
const app = express();
const path = require("path");
const port = process.env.EXPPORT || 80;
const api = require('./api');

app.use(express.json());
app.use(cors());

//==== External Server Route Registrations =====
app.use('/api', api);

// ==== Other Specific Server Routes ====
app.get("/message", (req, res) => {
  res.send({"message":"By Order of the Peaky Blinders!"});
});

//==== Wildcard (Passthrough to ClientApp) ====
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
});

const server = app.listen(port, (err) => {
  if (err) {
    console.log("server cannot listen");
    return;
  }
  console.log(
    `[EXPRESS@${server.address().address}:${
      server.address().port
    }] Online and listening`
  );
});

