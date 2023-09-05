 const express = require ('express');
 const app = express();
 const port = 3000;
 app.use(express.static("public"));
app.get('/', (req, res) => {
  console.log(req.query);
})
 app.listen(port, ()=>{
     console.log('My server app is listening on the port${300}! http://localhost:3000')  
 })