require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const movieRouter=require('./routes/movieRoutes')
const reviewRouter=require('./routes/reviewRoutes')
const port =8080


app.use(cors())
app.use(express.json())

app.use('/movies',movieRouter)
app.use('/reviews',reviewRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() {
    const url=process.env.DB_URL
    const password=process.env.DB_PASSWORD
    const urlWithPassword=url.replace('<password>',password)
  await mongoose.connect(urlWithPassword);
}