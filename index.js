const express = require("express");
const logger = require("morgan");
const cors = require("cors");


const app = express();
const PORT = 3001;


app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: false }));


app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/webhooks", (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

app.listen(PORT, () => console.log(`App is running on ${PORT} -> http://localhost:${PORT}`)); // eslint-disable-line no-console

// Ваш ключ API: c54624b532034d37897daa401492658a
// https://api_webhooks.ngrok.io/webhooks
// ngrok http 3001 -subdomain=api_webhooks