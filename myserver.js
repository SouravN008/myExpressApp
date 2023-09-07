 const express = require ('express');
 const app = express();
 const port = 3000;
 app.set('view engine' ,'ejs');

 app.get('/', (req, res) => {
  res.render('newResponse');
});


 app.listen(port, ()=>{
     console.log('My server app is listening on the port ${port}! http://localhost:3000')  
 })