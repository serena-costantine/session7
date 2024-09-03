const express = require("express");
const app = express();

//require('dotenv').config() //from npm dotenv: bas katabneha lamma naamel node app.js aal cmd la7 yekhod port 5555
const PORT = process.env.PORT || 3030;

// your code
//from npm: express
app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});