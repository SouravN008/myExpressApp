 const express = require ('express');
 const app = express();
 const port = 3000;
 const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static("public"));

 app.get('/', (req, res) => {
  res.send("Go to the emails path!");
})
app.get('/emails', (req, res) => {
  res.sendFile(__dirname+ "/public/index.html");
})
app.post('/emails' ,(req , res) =>{
  const email = req.body.email;
  console.log(email);
  res.send("Email logged successfully!");
})
 app.listen(port, ()=>{
     console.log('My server app is listening on the port${300}! http://localhost:3000')  
 })