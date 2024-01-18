const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const users = {
  "admin@sneat.com": "admin",
  "client@sneat.com": "client"
}

app.post("/login", (req, res) => {
  const { email, password } = req.body
  if (users[email] && users[email] === password) {
    res.send({ message: "Login successful" })
  } else {
    res.status(401).send({ message: "Invalid credentials" })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
