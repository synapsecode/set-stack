const express = require("express");
const cors = require('cors');;
const app = express();
const port = process.env.EXPPORT || 80;
const api = require('./api');
const utils = require('./utils')

app.use(express.json());
app.use(cors());

//==== External Server Route Registrations =====
app.use('/api', api);

// ==== Other Specific Server Routes ====
app.get("/message", (req, res) => {
  res.send({ "message": "By Order of the Peaky Blinders!" });
});

//==== Wildcard (Passthrough to ClientApp) ====
app.get("*", (req, res) => {
  const clientdomain = `http://${req.get('host')}:3000`
  res.sendFile(utils.getModifiedHTML(clientdomain));
});

const server = app.listen(port, (err) => {
  console.log(
    `[EXPRESS@${server.address().address}${server.address().port}] Online and listening`
  );
});

