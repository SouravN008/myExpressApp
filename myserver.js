 const express = require ('express');
 const app = express();
 const port = 3000;
 app.get('/users', (req, res) => {
   res.send("Hello Users!");
 })
 app.get('/admin', (req, res) => {
  res.send("Admin Page!");
})
app.get('/', (req, res) => {
  res.send("Wellcome to my server!");
})
 app.listen(port, ()=>{
     console.log('My server app is listening on the port${300}! http://localhost:3000')  
 })