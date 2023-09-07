 const express = require ('express');
 const app = express();
 const port = 3000;
 

 app.get('/', (req, res) => {
  res.send("Homepage");
});
app.get('/users', (req, res) => {
  res.send('Users page');
});
app.get('/users/new', (req, res) => {
  res.send('New users page');
});
app.get('/course', (req, res) => {
  res.send('course listing');
});
app.get('/course/FSD', (req, res) => {
  res.send('Full Stack Development');
});

 app.listen(port, ()=>{
     console.log('My server app is listening on the port ${port}! http://localhost:3000')  
 })