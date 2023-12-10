const express = require('express')
const authRouter = require('./routes/auth');
const mongoose = require("mongoose");
var cors = require('cors')

const app = express()

const port =5555
const DB ="mongodb+srv://mlm:Myagag4936!!@cluster0.pgihray.mongodb.net/?retryWrites=true&w=majority";
app.get("/", function (req, res) {
  res.json( { hi :  "Hello World"})
})
app.use(express.json())
app.use(authRouter);

app.use(cors({
  origin: 'http://localhost:'
}));

mongoose.connect(DB).then(()=> {
  console.log("Conncetion is Successful");
}).catch((e)=>{
console.log(e);
});
app.listen(port ,"0.0.0.0",() => {
    console.log(`My Server is mo runniing on ${port}`)
})