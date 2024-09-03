const express = require("express");
const app = express();
//require('dotenv').config() //from npm dotenv: bas katabneha lamma naamel node app.js aal cmd la7 yekhod port 5555
const PORT = process.env.PORT || 3030;

const xlsx = require("xlsx");
let wb = xlsx.readFile('excel.xlsx');
let wh = wb.Sheets['Sheet1'];
let _data = xlsx.utils.sheet_to_json(wh);


// your code
//from npm: express
app.get('/', function (req, res) {
    res.send('Hello World')
  })

//another one:men ba3ed ma chtaghalna hawdouk zedna hayde w kafayna cheghel
//  app.get('/students', function (req, res) {
//   var data = [
//     {id:1 , name:'Serena'},
//     {id:2 , name:'Maria'},
//     {id:3 , name:'Titi'},
//     {id:4 , name:'Mar'}
//   ]
//   res.send(data) //bas nekteba menjarreba 3a node app.js then: http://localhost:3030/students -> google chrome
// })

app.get('/students', function (req, res) {
  res.send(_data)
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});