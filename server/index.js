import express from 'express'
import authRoute from "./routes/authRoute.js"
import 'dotenv/config'

const app = express();
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send(JSON.stringify(req.headers));
})

app.use("/api/user", authRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})